import * as React from "react";
import { SVGProps } from "react";

const ClipboardLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M9 0a2 2 0 0 1 2 2h4a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4a2 2 0 0 1 2-2ZM5 4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Z" />
      <path d="M4 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM4 14a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default ClipboardLight;
