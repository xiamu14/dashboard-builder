import * as React from "react";
import { SVGProps } from "react";

const PauseFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 10 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1ZM9 0a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z" />
    </g>
  </svg>
);

export default PauseFilled;
