import * as React from "react";
import { SVGProps } from "react";

const SortFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M0 1a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 13a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default SortFilled;
