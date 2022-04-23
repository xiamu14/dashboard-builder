import * as React from "react";
import { SVGProps } from "react";

const LinkFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 10"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M0 5a5 5 0 0 1 5-5h3a1 1 0 0 1 0 2H5a3 3 0 0 0 0 6h3a1 1 0 0 1 0 2H5a5 5 0 0 1-5-5ZM11 1a1 1 0 0 1 1-1h3a5 5 0 0 1 0 10h-3a1 1 0 1 1 0-2h3a3 3 0 0 0 0-6h-3a1 1 0 0 1-1-1Z" />
      <path d="M6 5a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default LinkFilled;
