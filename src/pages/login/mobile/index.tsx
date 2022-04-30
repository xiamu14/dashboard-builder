import SignUp from "@src/pages/login/sign_up";
import React, { memo } from "react";
import { BaseProps } from "../types";
import "./index.scoped.scss";

const MobileView = memo(({ onSignUp }: BaseProps) => {
  return (
    <div>
      <div className="sign-in-box flex justify-between">
        <div className="logo" />
        <div className="sign-in flex justify-center items-center">
          <span className="question">Already a member ?</span>
          <span>Sign in</span>
        </div>
      </div>
      <SignUp onSignUp={onSignUp} />
    </div>
  );
});

export default MobileView;
