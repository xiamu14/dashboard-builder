import * as React from "react";
import { SVGProps } from "react";

const FrownLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z" />
      <path d="M5.4 14.8a1 1 0 0 0 1.4-.2A3.992 3.992 0 0 1 10 13c1.308 0 2.469.627 3.2 1.6a1 1 0 1 0 1.6-1.2A5.992 5.992 0 0 0 10 11a5.992 5.992 0 0 0-4.8 2.4 1 1 0 0 0 .2 1.4ZM5.293 6.293a1 1 0 0 1 1.414 0l.5.5a1 1 0 0 1-1.414 1.414l-.5-.5a1 1 0 0 1 0-1.414ZM14.707 6.293a1 1 0 0 0-1.414 0l-.5.5a1 1 0 0 0 1.414 1.414l.5-.5a1 1 0 0 0 0-1.414Z" />
    </g>
  </svg>
);

export default FrownLight;
