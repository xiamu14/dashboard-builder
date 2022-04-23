import * as React from "react";
import { SVGProps } from "react";

const MessagesLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M14 5a2 2 0 0 0 1.11-.336L18 2.737V12a1 1 0 0 1-1 1h-1v2h1a3 3 0 0 0 3-3V2.737c0-1.597-1.78-2.55-3.11-1.664L14 3H7a3 3 0 0 0-3 3v1h2V6a1 1 0 0 1 1-1h7Z"
        fillRule="nonzero"
      />
      <path d="M3.75 17.438A2 2 0 0 1 5 17h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8.839l1.75-1.4ZM5 19h8a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v8.839c0 1.677 1.94 2.61 3.25 1.562L5 19Z" />
      <path d="M4 13a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default MessagesLight;
