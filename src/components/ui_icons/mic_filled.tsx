import * as React from "react";
import { SVGProps } from "react";

const MicFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M4 3a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V3Z" />
      <path d="M2 9a1 1 0 0 0-2 0 7.002 7.002 0 0 0 6 6.93V18H4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8v-2.07A7.002 7.002 0 0 0 14 9a1 1 0 1 0-2 0A5 5 0 0 1 2 9Z" />
    </g>
  </svg>
);

export default MicFilled;
