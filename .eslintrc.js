module.exports = {
  extends: ["alloy", "alloy/react", "alloy/typescript"],
  plugins: ["react", "react-hooks", "jest"],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    browser: true,
    // node: true,
    // mocha: true,
    jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
    JSX: true,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
    "react/self-closing-comp": "warn",
    "max-nested-callbacks": "warn",
    complexity: ["error", { max: 25 }],
    // 自定义你的规则
  },
};
