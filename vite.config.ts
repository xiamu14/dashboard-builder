import reactRefresh from "@vitejs/plugin-react-refresh";
import antdDayjs from "antd-dayjs-vite-plugin";
import dotenv from "dotenv";
import fs from "fs";
import lessToJS from "less-vars-to-js";
import path from "path";
import reactScopedCssPlugin from "rollup-plugin-react-scoped-css";
import { defineConfig } from "vite";
import { injectHtml } from "vite-plugin-html";
import vitePluginImp from "vite-plugin-imp";
import WindiCSS from "vite-plugin-windicss";

const getEnv = () => {
  const env = process.argv[process.argv.length - 1];
  const envPath = env === "dev" ? "./.env" : `./.env.${env}`;
  const envConfig = dotenv.config({
    path: path.resolve(__dirname, envPath), // 配置文件路径
    encoding: "utf8", // 编码方式，默认utf8
    debug: env === "dev", // 是否开启debug，默认false
  }).parsed;

  return envConfig;
};

const env = getEnv();

function importAntdStyle(name: string) {
  // FIXME: 这里要用另一种，暂时用不了的感觉
  const antdImpList = ["row", "col"];
  if (antdImpList.includes(name)) {
    return ``;
  }
  return `antd/lib/${name}/style/index.less`;
}

// 获取主题变量
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, "./src/style/antd_theme_variable.less"),
    "utf8"
  )
);

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "./dist",
    assetsDir: "./static",
  },
  plugins: [
    reactScopedCssPlugin(),
    WindiCSS(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: importAntdStyle,
        },
      ],
    }),
    injectHtml({
      data: {
        title: env.VITE_APP_TITLE,
      },
    }),
    antdDayjs(),
    reactRefresh(),
  ],
  resolve: {
    alias: [
      { find: "@src", replacement: path.resolve(__dirname, "./src") },
      { find: /^~/, replacement: "" }, // 用于兼容 webpack 导入 less 的写法，以 “～” 开头（@import '~antd/'）
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables,
      },
    },
  },
});
