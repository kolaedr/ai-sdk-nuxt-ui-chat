// @ts-check
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  eslintPluginPrettierRecommended,
  {
    rules: {
      //   'prettier/prettier': [
      //   'error',
      //   {
      //     semi: true,
      //     singleQuote: true,
      //     bracketSpacing: true,
      //     bracketSameLine: true,
      //     singleAttributePerLine: true,
      //     vueIndentScriptAndStyle: true,
      //     trailingComma: 'none',
      //     printWidth: 120,
      //     endOfLine: 'auto',
      //     arrowParens: 'avoid',
      //     htmlWhitespaceSensitivity: 'ignore'
      //   }
      // ],
      "vue/html-indent": [
        "error",
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
        },
      ],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "always",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  // Your custom configs here
);
