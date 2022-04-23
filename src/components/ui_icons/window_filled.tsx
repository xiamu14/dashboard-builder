import * as React from "react";
import { SVGProps } from "react";

const WindowFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M0 9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V9Z"
        fillRule="nonzero"
      />
      <path d="M3 0a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a3 3 0 0 0-3-3H3Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </g>
  </svg>
);

export default WindowFilled;
