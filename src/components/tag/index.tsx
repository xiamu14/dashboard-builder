import { colors } from "@src/constant";
import React from "react";
import "./index.scss";
interface Props {
  color?: string;
}

const Tag = React.memo(
  ({ color, children }: React.PropsWithChildren<Props>) => {
    return (
      <div
        className="tag"
        style={{ backgroundColor: color ?? colors["neutral-03"] }}
      >
        {children}
      </div>
    );
  }
);

export default Tag;
