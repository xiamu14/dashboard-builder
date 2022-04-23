import * as React from "react";
import { SVGProps } from "react";

const MessageLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M5 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM5 10a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z" />
      <path d="M4.72 14.464A2 2 0 0 1 6 14h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13.73l2.72-2.266ZM6 16h11a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v13.73c0 1.696 1.978 2.622 3.28 1.536L6 16Z" />
    </g>
  </svg>
);

export default MessageLight;
