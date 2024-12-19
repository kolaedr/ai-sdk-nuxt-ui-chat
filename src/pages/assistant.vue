<script setup lang="ts">
import { useAssistant } from "@ai-sdk/vue";
const { messages, input, handleSubmit } = useAssistant({
  api: "/api/assistant",
  onError: (error) => {
    console.error(error);
  },
});
</script>

<template>
  <div class="flex flex-col w-full max-w-5xl py-24 mx-auto stretch">
    <div
      v-for="m in messages"
      :key="m.id"
      class="flex gap-4"
      :class="[m.role === 'user' ? ' flex-row-reverse' : '']"
    >
      <UAvatar v-if="m.role === 'user'" alt="User" size="sm" />

      <UAvatar v-else alt="A I" size="sm" />
      <div class="border p-2 mb-2 rounded-lg shadow max-w-4xl">
        <pre class="whitespace-pre-wrap">{{ m.content }} </pre>
      </div>
    </div>

    <form class="fixed inset-x-0 bottom-0 w-full" @submit="handleSubmit">
      <div
        class="max-w-xl mx-auto flex gap-2 items-center p-2 bg-white shadow-xl"
      >
        <UInput v-model="input" class="flex-1" />

        <UButton
          icon="uil:github"
          size="sm"
          type="submit"
          color="primary"
          variant="solid"
          label="Button"
          :trailing="false"
        />
      </div>
    </form>
  </div>
</template>
