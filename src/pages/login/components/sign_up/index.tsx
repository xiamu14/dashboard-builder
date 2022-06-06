import { LogoApple, LogoGoogle, MailLight } from "maple-icons";
import React, { memo } from "react";
import "./index.scoped.scss";
import "./index_mobile.scoped.scss";
const SignUp = memo(({ onSignUp }: { onSignUp: () => void }) => {
  return (
    <div className="sign-up flex flex-col justify-center items-center w-full h-full">
      <div className="content">
        <h2 className="title">Sign Up</h2>
        <p className="subtitle">Sign up with Open account</p>
        <div className="methods flex justify-between items-center cursor-pointer">
          <div className="method flex justify-evenly items-center ">
            <LogoGoogle width={24} height={24} />
            <span>Google</span>
          </div>
          <div className="method flex justify-evenly items-center">
            <LogoApple width={24} height={24} />
            <span>Apple ID</span>
          </div>
        </div>
        <div className="split-line" />
        <p className="subtitle">Or continue with email address</p>
        <div className="field-email flex justify-start items-center">
          <MailLight width={20} height={20} />
          <input placeholder="Your email" className="flex-1" />
        </div>
        <div
          className="btn-continue w-full flex justify-center items-center cursor-pointer"
          onClick={onSignUp}
        >
          Sign Up
        </div>
        <p className="tips">
          This site is protected by reCAPTCHA and the Google Privacy Policy.
        </p>
      </div>
    </div>
  );
});

export default SignUp;
