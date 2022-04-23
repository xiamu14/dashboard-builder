import * as React from "react";
import { SVGProps } from "react";

const UndoLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 10"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.142 7.743a7.589 7.589 0 0 0-9.295-5.366 7.44 7.44 0 0 0-4.89 4.173l1.454-.395a1 1 0 1 1 .523 1.93l-3.17.86a.997.997 0 0 1-.109.03l-.405.11a1 1 0 0 1-1.228-.707L.034 4.691a1 1 0 0 1 1.932-.518l.326 1.218A9.424 9.424 0 0 1 8.33.445a9.589 9.589 0 0 1 11.744 6.78 1 1 0 1 1-1.932.518Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default UndoLight;
