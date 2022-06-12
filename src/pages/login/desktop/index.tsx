import config from "@src/config";
import { colors } from "@src/constant";
import { CheckCircledLight } from "maple-icons";
import React, { useState } from "react";
import SignUp from "../components/sign_up";
import { BaseProps } from "../types";
import { createWechatLoginUrl } from "../utils";
import "./index.scoped.scss";

const wechatLoginUrl = createWechatLoginUrl(config.wechatLoginUrlInfo);

export default function LoginDesktop({ onSignUp }: BaseProps) {
  const [errorText, setErrorText] = useState<String>();
  const [hideWechatLogin, setHideWechatLogin] = useState(true);

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
        <div className="flex-1 login-container">
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
