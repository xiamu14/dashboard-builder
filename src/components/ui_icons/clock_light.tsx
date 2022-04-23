import * as React from "react";
import { SVGProps } from "react";

const ClockLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z" />
      <path d="M10 4a1 1 0 0 1 1 1v4.586l2.207 2.207a1 1 0 0 1-1.414 1.414L9.586 11A2 2 0 0 1 9 9.586V5a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default ClockLight;
