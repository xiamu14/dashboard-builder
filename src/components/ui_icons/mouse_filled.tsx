import * as React from "react";
import { SVGProps } from "react";

const MouseFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 0a7 7 0 0 0-7 7v6a7 7 0 1 0 14 0V7a7 7 0 0 0-7-7Zm1 5a1 1 0 0 0-2 0v3a1 1 0 1 0 2 0V5Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default MouseFilled;
