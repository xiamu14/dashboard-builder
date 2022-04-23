import * as React from "react";
import { SVGProps } from "react";

const MoreVerticalFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 4 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M4 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </g>
  </svg>
);

export default MoreVerticalFilled;
