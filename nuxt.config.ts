// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  serverDir: "server/",
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
  },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/ui"],
  // modules: ['@nuxtjs/tailwindcss'],
  css: ["~/assets/css/main.css"],
  ui: {
    safelistColors: ["violet", "zinc"],
  },
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
});
