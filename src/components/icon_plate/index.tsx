import React, { CSSProperties, memo } from "react";

interface Props {
  circle?: boolean;
  className?: string;
  style?: CSSProperties;
}

const IconPlate = memo(
  ({
    className = "",
    style,
    circle = false,
    children,
  }: React.PropsWithChildren<Props>) => {
    const fullStyle = circle
      ? {
          ...style,
          borderRadius: "50%",
        }
      : style;
    return (
      <div
        className={`${className} flex justify-center items-center`}
        style={fullStyle}
      >
        {children}
      </div>
    );
  }
);

export default IconPlate;
