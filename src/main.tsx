import "@antd-hero/components/dist/style.css";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import zhCN from "antd/lib/locale/zh_CN";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import "virtual:windi.css";
import App from "./app";
import "./style/atomic.scss";
import "./style/color_variable.css";
import "./style/common.css";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
