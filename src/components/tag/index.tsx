import { colors } from "@src/constant";
import React from "react";
import "./index.scoped.scss";
interface Props {
  color?: string;
  className?: string;
}

const Tag = React.memo(
  ({ color, className = "", children }: React.PropsWithChildren<Props>) => {
    return (
      <div
        className={`tag ${className}`}
        style={{ backgroundColor: color ?? colors["neutral-03"] }}
      >
        {children}
      </div>
    );
  }
);

export default Tag;
