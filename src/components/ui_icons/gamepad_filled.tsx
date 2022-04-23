import * as React from "react";
import { SVGProps } from "react";

const GamepadFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fillRule="nonzero" />
      <path d="M11 1a1 1 0 1 0-2 0v1H4a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-5V1Zm7 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM5 6a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H6v1a1 1 0 1 1-2 0v-1H3a1 1 0 0 1 0-2h1V7a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default GamepadFilled;
