import * as React from "react";
import { SVGProps } from "react";

const SprayLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M3 5V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm2 0V3h2v2H5Zm4 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z" />
      <path
        d="M13 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SprayLight;
