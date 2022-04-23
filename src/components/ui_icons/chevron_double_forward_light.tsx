import * as React from "react";
import { SVGProps } from "react";

const ChevronDoubleForwardLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M6.543 15.207a1 1 0 0 1 0-1.414L12.336 8 6.543 2.207A1 1 0 1 1 7.957.793l5.793 5.793a2 2 0 0 1 0 2.828l-5.793 5.793a1 1 0 0 1-1.414 0Z" />
      <path d="M.293 15.207a1 1 0 0 1 0-1.414L6.086 8 .293 2.207A1 1 0 1 1 1.707.793L7.5 6.586a2 2 0 0 1 0 2.828l-5.793 5.793a1 1 0 0 1-1.414 0Z" />
    </g>
  </svg>
);

export default ChevronDoubleForwardLight;
