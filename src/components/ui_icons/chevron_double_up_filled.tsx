import * as React from "react";
import { SVGProps } from "react";

const ChevronDoubleUpFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M.793 8.457a1 1 0 0 0 1.414 0L8 2.664l5.793 5.793a1 1 0 1 0 1.414-1.414L9.414 1.25a2 2 0 0 0-2.828 0L.793 7.043a1 1 0 0 0 0 1.414Z" />
      <path d="M.793 14.707a1 1 0 0 0 1.414 0L8 8.914l5.793 5.793a1 1 0 1 0 1.414-1.414L9.414 7.5a2 2 0 0 0-2.828 0L.793 13.293a1 1 0 0 0 0 1.414Z" />
    </g>
  </svg>
);

export default ChevronDoubleUpFilled;
