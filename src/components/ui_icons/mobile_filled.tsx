import * as React from "react";
import { SVGProps } from "react";

const MobileFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Zm.833 1.5a.333.333 0 0 0-.333.333c0 .92.746 1.667 1.667 1.667h3.666c.92 0 1.667-.746 1.667-1.667a.333.333 0 0 0-.333-.333H3.833Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default MobileFilled;
