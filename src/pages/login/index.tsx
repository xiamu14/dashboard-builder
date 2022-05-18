import Responsive from "@src/components/responsive";
import config from "@src/config";
import { colors, DashboardEntryPath } from "@src/constant";
import userModel from "@src/model/user";
import { getHashParams } from "@src/utils";
import { CheckCircledLight } from "maple-icons";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SignUp from "./components/sign_up";
import "./index.scoped.scss";
import MobileLogin from "./mobile";
import { BaseProps } from "./types";
import { createWechatLoginUrl } from "./utils";

const wechatLoginUrl = createWechatLoginUrl(config.wechatLoginUrlInfo);

function Login({ onSignUp }: BaseProps) {
  const [errorText, setErrorText] = useState<String>();
  const [hideWechatLogin, setHideWechatLogin] = useState(true);
  const history = useHistory();

  const handleLogin = useCallback(
    async (code: string) => {
      console.log("debug code", code);
      try {
        const { data } = { data: { token: "" } };
        console.log("debug response", data);
        // NOTE: 更新 api authTOken
        userModel.userToken = data.token;
        // userModel.userInfo = data;
        history.push(DashboardEntryPath);
      } catch (error) {}
    },
    [history]
  );

  useEffect(() => {
    if (userModel.isLogin) {
      history.push(DashboardEntryPath);
    } else {
      const hashParams = getHashParams<{ code: string }>();
      if (hashParams?.code) {
        handleLogin(hashParams.code);
      }
    }
  }, [handleLogin, history]);

  return (
    <div className="login-page">
      {!hideWechatLogin && (
        <div className="login-box flex-center pt-40px">
          <iframe
            width="320"
            height="440"
            className="login-iframe"
            src={wechatLoginUrl}
            title="登录"
            sandbox="allow-scripts allow-top-navigation allow-same-origin"
          />
        </div>
      )}
      <div className="w-full h-full flex">
        <div className="side-info w-[28%] bg-neutral-02 flex justify-center items-center">
          <div className="logo" />
          <div className="content">
            <div className="illustration" />
            <h4 className="title h-4">Plan includes</h4>
            {[
              "Unlimited product uploads",
              "Pro tips",
              "Free forever",
              "Full author options",
            ].map((item, index) => {
              return (
                <div key={index} className="detail flex items-center">
                  <CheckCircledLight
                    color={colors["primary-02"]}
                    width={20}
                    height={20}
                  />
                  <span className="detail-text">{item}</span>
                </div>
              );
            })}
            <div className="h-1" />
          </div>
        </div>
        <div className="flex-1 container">
          <div className="sign-in">
            <span className="question">Already a member ?</span>
            <span>Sign in</span>
          </div>
          <SignUp onSignUp={onSignUp} />
        </div>
      </div>
    </div>
  );
}

export default function LoginEntry() {
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
      mobile={<MobileLogin onSignUp={handleMockLogin} />}
      desktop={<Login onSignUp={handleMockLogin} />}
    />
  );
}
