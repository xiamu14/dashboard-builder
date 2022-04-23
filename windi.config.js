import typography from "windicss/plugin/typography";
import mixin from "./plugin/windi.mixin";
import colorVariables from "./src/constant/color_variables";
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
    },
  },
};
