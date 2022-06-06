import Responsive from "@src/components/responsive";
import config from "@src/config";
import { DashboardEntryPath } from "@src/constant";
import userModel from "@src/model/user";
import LoginDesktop from "@src/pages/login/desktop";
import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scoped.scss";
import LoginMobile from "./mobile";
import { createWechatLoginUrl } from "./utils";

const wechatLoginUrl = createWechatLoginUrl(config.wechatLoginUrlInfo);

export default function Login() {
  const history = useHistory();
  const handleMockLogin = () => {
    const { data } = {
      data: {
        token: "xxx-xxx-xxx",
        id: "01",
        alias: "text",
        isActive: true,
        role: "Admin" as "Admin",
      },
    };
    // console.log("debug response", data);
    // NOTE: 更新 api authTOken
    userModel.userToken = data.token;
    userModel.userInfo = data;
    history.push(DashboardEntryPath);
  };

  return (
    <Responsive
      mobile={<LoginMobile onSignUp={handleMockLogin} />}
      desktop={<LoginDesktop onSignUp={handleMockLogin} />}
    />
  );
}
