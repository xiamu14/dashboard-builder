import * as React from "react";
import { SVGProps } from "react";

const ClockFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm1-15a1 1 0 1 0-2 0v4.586A2 2 0 0 0 9.586 11l2.207 2.207a1 1 0 0 0 1.414-1.414L11 9.586V5Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ClockFilled;
