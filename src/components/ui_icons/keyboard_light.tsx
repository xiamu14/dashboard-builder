import * as React from "react";
import { SVGProps } from "react";

const KeyboardLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M17 2H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" />
      <path d="M6 10a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Z" />
      <path
        d="M3 4a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM3 7a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM6 7a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM9 7a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM12 7a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM15 7a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM3 10a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM15 10a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM6 4a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM9 4a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM12 4a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM15 4a1 1 0 0 1 2 0 1 1 0 0 1-2 0Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default KeyboardLight;
