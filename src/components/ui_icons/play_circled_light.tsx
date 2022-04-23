import * as React from "react";
import { SVGProps } from "react";

const PlayCircledLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z" />
      <path d="M8 12.536 12.392 10 8 7.464v5.072Zm5.392-.804c1.334-.77 1.334-2.694 0-3.464L9 5.732c-1.333-.77-3 .192-3 1.732v5.072c0 1.54 1.667 2.502 3 1.732l4.392-2.536Z" />
    </g>
  </svg>
);

export default PlayCircledLight;
