module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: (input) => {
        return input.file.indexOf("_mobile.") > -1 ? 37.5 : 144;
      },
      unitPrecision: 3,
      propList: ["*"],
      selectorBlackList: ["html", "line-height", "letter-spacing"],
      exclude: /(node_modules)/,
      minPixelValue: 2,
    },
  },
};
