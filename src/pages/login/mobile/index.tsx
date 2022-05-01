import SignUp from "@src/pages/login/components/sign_up";
import React, { memo } from "react";
import { BaseProps } from "../types";
import "./index-mobile.scoped.scss";

const MobileView = memo(({ onSignUp }: BaseProps) => {
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
        <SignUp onSignUp={onSignUp} />
      </div>
    </div>
  );
});

export default MobileView;
