import * as React from "react";
import { SVGProps } from "react";

const CopyLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M3 2h8a1 1 0 0 1 1 1v1h2V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1v-2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"
        fillRule="nonzero"
      />
      <path d="M15 6H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM7 4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Z" />
    </g>
  </svg>
);

export default CopyLight;
