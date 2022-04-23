import * as React from "react";
import { SVGProps } from "react";

const ServerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm2.5 1a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm12 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM0 13a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2Zm2.5 1a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm12 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </g>
  </svg>
);

export default ServerFilled;
