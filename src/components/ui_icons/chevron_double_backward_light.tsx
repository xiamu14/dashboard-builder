import * as React from "react";
import { SVGProps } from "react";

const ChevronDoubleBackwardLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M8.207 15.207a1 1 0 0 0 0-1.414L2.414 8l5.793-5.793A1 1 0 1 0 6.793.793L1 6.586a2 2 0 0 0 0 2.828l5.793 5.793a1 1 0 0 0 1.414 0Z" />
      <path d="M14.457 15.207a1 1 0 0 0 0-1.414L8.664 8l5.793-5.793A1 1 0 1 0 13.043.793L7.25 6.586a2 2 0 0 0 0 2.828l5.793 5.793a1 1 0 0 0 1.414 0Z" />
    </g>
  </svg>
);

export default ChevronDoubleBackwardLight;
