import React from "react";
import "./index.scoped.scss";
interface Props {
  bgColor: string;
  title: string;
}

const BlockHeader = React.memo(({ bgColor, title }: Props) => {
  return (
    <div className="block-header">
      <div className="color-block" style={{ backgroundColor: bgColor }} />
      <span className="title">{title}</span>
    </div>
  );
});

export default BlockHeader;
