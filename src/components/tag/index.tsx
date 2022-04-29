import { colors } from "@src/constant";
import React from "react";
import "./index.scss";
interface Props {
  color?: string;
}

const Tag = React.memo((props: React.PropsWithChildren<Props>) => {
  return (
    <div
      className="tag"
      style={{ backgroundColor: props.color ?? colors["neutral-03"] }}
    >
      {props.children}
    </div>
  );
});

export default Tag;
