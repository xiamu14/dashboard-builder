import { colors } from "@src/constant";
import SignUp from "@src/pages/login/components/sign_up";
import { rgba } from "@src/utils/css";
import { Modal } from "antd";
import React, { memo, useCallback } from "react";
import { BaseProps } from "../types";
import "./index-mobile.scoped.scss";

const LoginMobile = memo(({ onSignUp }: BaseProps) => {
  const handleSignUp = useCallback(() => {
    Modal.info({
      title: "请使用 PC 访问",
      content: "移动端正在开发中，请在 PC 上访问",
      centered: true,
      width: 316,
      bodyStyle: {
        borderRadius: "16px",
      },
      maskStyle: {
        background: rgba(colors["neutral-02"], 0.8),
      },
    });
  }, []);

  return (
    <div className="flex-col flex h-100vh">
      <div className="sign-in-box flex justify-between">
        <div className="logo" />
        <div className="sign-in flex justify-center items-center">
          <span className="question">Already a member ?</span>
          <span>Sign in</span>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <SignUp onSignUp={handleSignUp} />
      </div>
    </div>
  );
});

export default LoginMobile;
