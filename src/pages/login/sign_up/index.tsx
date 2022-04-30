import { LogoApple, LogoGoogle, MailLight } from "maple-icons";
import React, { memo } from "react";
import "./index.scoped.scss";
const SignUp = memo(({ onSignUp }: { onSignUp: () => void }) => {
  return (
    <div className="sign-up flex flex-col w-full h-full">
      <div className="content">
        <h2 className="h-2 title">Sign Up</h2>
        <p className="p-14 subtitle">Sign up with Open account</p>
        <div className="methods">
          <div className="method">
            <LogoGoogle width={24} height={24} />
            <span>Google</span>
          </div>
          <div className="method">
            <LogoApple width={24} height={24} />
            <span>Apple ID</span>
          </div>
        </div>
        <div className="split-line" />
        <p className="p-14 subtitle">Or continue with email address</p>
        <div className="field-email">
          <MailLight width={20} height={20} />
          <input placeholder="Your email" />
        </div>
        <div className="btn-continue" onClick={onSignUp}>
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
