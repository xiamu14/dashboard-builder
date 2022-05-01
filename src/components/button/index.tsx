import React, { memo } from "react";
import "./index.scoped.scss";
interface Props {
  plain?: boolean;
}

const Button = memo(
  ({ children, plain = false }: React.PropsWithChildren<Props>) => {
    return (
      <div className={`button-box ${plain ? "plain" : "fill"}`}>{children}</div>
    );
  }
);

export default Button;
