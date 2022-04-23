import * as React from "react";
import { SVGProps } from "react";

const LayoutFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3 1 1 0 0 1-1 1H1a1 1 0 0 1-1-1ZM10 7a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h6a1 1 0 0 0 1-1V7ZM13 18a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a3 3 0 0 1-3 3h-2Z" />
    </g>
  </svg>
);

export default LayoutFilled;
