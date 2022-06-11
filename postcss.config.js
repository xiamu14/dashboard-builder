module.exports = {
  plugins: {
    "@redchili/postcss-pxtorem": {
      rootValue: 144,
      mediaRules: {
        "screen and (max-width: 500px)": 37.5,
      },
      unitPrecision: 3,
      propList: ["*"],
      selectorBlackList: ["html", "line-height", "letter-spacing"],
      exclude: /(node_modules)/,
      minPixelValue: 2,
    },
  },
};
