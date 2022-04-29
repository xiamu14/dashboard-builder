import React from "react";
import "./index.scss";
interface Props {
  /** 宽度 */
  width: string;
  /** percent: 百分比 */
  height: string;
}

const AspectDiv = React.memo((props: React.PropsWithChildren<Props>) => {
  const { children, width, height } = props;
  return (
    <div className="aspect-div" style={{ width }}>
      <div className="aspect-height" style={{ paddingBottom: height }}>
        <div className="content-box">{children}</div>
      </div>
    </div>
  );
});

export default AspectDiv;
