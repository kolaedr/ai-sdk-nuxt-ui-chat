import { streamText, AssistantResponse } from "ai";
// import { openai } from "@ai-sdk/openai";
import OpenAI from "openai";
export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().openaiApiKey;
  if (!apiKey) throw new Error("Missing OpenAI API key");
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  return defineEventHandler(async (event: any) => {
    const input: {
      message: string;
      threadId?: string;
    } = await readBody(event);
    console.log("messages :>> ", input);
    const threadId =
      input?.threadId ?? (await openai.beta.threads.create({})).id;

    const createdMessage = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: input.message,
    });
    console.log("createdMessage :>> ", createdMessage);
    // const result = streamText({
    //   model: openai("gpt-4o"),
    //   message,
    // });

    // return result.toDataStreamResponse();
    return AssistantResponse(
      { threadId, messageId: createdMessage.id },
      async ({ forwardStream, sendDataMessage }) => {
        // Run the assistant on the thread
        const runStream = openai.beta.threads.runs.stream(threadId, {
          assistant_id: "asst_WbnXcgTGQMmtBOyNYrDHFCxA",
        });

        // forward run status would stream message deltas
        let runResult = await forwardStream(runStream);

        // status can be: queued, in_progress, requires_action, cancelling, cancelled, failed, completed, or expired
        while (
          runResult?.status === "requires_action" &&
          runResult.required_action?.type === "submit_tool_outputs"
        ) {
          const tool_outputs =
            runResult.required_action.submit_tool_outputs.tool_calls.map(
              (toolCall: any) => {
                const parameters = JSON.parse(toolCall.function.arguments);

                switch (toolCall.function.name) {
                  // configure your tool calls here

                  default:
                    throw new Error(
                      `Unknown tool call function: ${toolCall.function.name}`,
                    );
                }
              },
            );

          runResult = await forwardStream(
            openai.beta.threads.runs.submitToolOutputsStream(
              threadId,
              runResult.id,
              { tool_outputs },
            ),
          );
        }
      },
    );
  });
});
