import React, { memo } from "react";
import "./index.scoped.scss";
interface Props {
  className?: string;
  plain?: boolean;
}

const Button = memo(
  ({
    children,
    plain = false,
    className = "",
  }: React.PropsWithChildren<Props>) => {
    return (
      <div className={`button-box ${plain && "plain"} ${className}`}>
        {children}
      </div>
    );
  }
);

export default Button;
