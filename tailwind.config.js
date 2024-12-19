import defaultColors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,vue,ts}", "./nuxt.config.{js,ts}"],
  theme: {
    colors: {
      ...defaultColors,
      primary: defaultColors.fuchsia,
      cool: defaultColors.gray, // Перемістіть 'cool' до основного об'єкта 'colors'
    },
    extend: {},
  },
  plugins: [],
};
