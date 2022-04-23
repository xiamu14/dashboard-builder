import * as React from "react";
import { SVGProps } from "react";

const MouseLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M12 13V7A5 5 0 0 0 2 7v6a5 5 0 0 0 10 0ZM7 0a7 7 0 0 0-7 7v6a7 7 0 1 0 14 0V7a7 7 0 0 0-7-7Z" />
      <path d="M7 4a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default MouseLight;
