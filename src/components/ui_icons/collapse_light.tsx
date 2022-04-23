import * as React from "react";
import { SVGProps } from "react";

const CollapseLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M14 17a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0v-2ZM14 3a3 3 0 0 0 3 3h2a1 1 0 0 0 0-2h-2a1 1 0 0 1-1-1V1a1 1 0 0 0-2 0v2ZM6 3a3 3 0 0 1-3 3H1a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1V1a1 1 0 0 1 2 0v2ZM6 17a3 3 0 0 0-3-3H1a1 1 0 0 0 0 2h2a1 1 0 0 1 1 1v2a1 1 0 0 0 2 0v-2Z" />
    </g>
  </svg>
);

export default CollapseLight;
