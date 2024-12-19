// import defaultColors from "tailwindcss/colors";
import type { Config } from "tailwindcss";
// /** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  content: ["./src/**/*.{js,vue,ts}", "./nuxt.config.{js,ts}"],
  theme: {
    // colors: {
    //   ...defaultColors,
    //   primary: defaultColors.fuchsia,
    //   cool: defaultColors.gray,
    // },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
