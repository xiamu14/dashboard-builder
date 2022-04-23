import plugin from "windicss/plugin";

function pxToRem(variable) {
  return `${variable / 144}rem`;
}

export default plugin(({ addUtilities }) => {
  addUtilities({
    ".flex-center": {
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    },
    ".p-14": {
      "font-size": pxToRem(14),
    },
    ".h-2": {
      "font-size": pxToRem(48),
      color: "var(--neutral-07)",
    },
    ".h-4": {
      "font-size": pxToRem(32),
      color: "var(--neutral-06)",
    },
  });
});
