module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 144,
      unitPrecision: 3,
      propList: ["*"],
      selectorBlackList: ["html", "line-height", "letter-spacing"],
      exclude: /(node_modules)/,
      minPixelValue: 12,
    },
  },
};
