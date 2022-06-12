import typography from "windicss/plugin/typography";
import colorVariables from "./src/constant/color_variables";
import mixin from "./src/plugin/windi.mixin";
export default {
  extract: {
    include: ["src/**/*.tsx"],
    exclude: ["node_modules/**/*", ".git"],
  },
  safelist: ["prose", "prose-sm", "m-auto"],
  darkMode: "class",
  plugins: [typography, mixin],
  theme: {
    extend: {
      colors: colorVariables,
      screens: {
        mobile: "500.1px",
      },
    },
  },
};
