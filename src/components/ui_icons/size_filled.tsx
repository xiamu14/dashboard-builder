import * as React from "react";
import { SVGProps } from "react";

const SizeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M17 7a1 1 0 0 1-1-1V3.414L3.414 16H6a1 1 0 1 1 0 2H2a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v2.586L14.586 2H12a1 1 0 1 1 0-2h4a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1Z"
        fillRule="nonzero"
      />
      <path d="M0 2a2 2 0 0 1 2-2h4a1 1 0 0 1 0 2H2v4a1 1 0 0 1-2 0V2ZM18 16a2 2 0 0 1-2 2h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4Z" />
    </g>
  </svg>
);

export default SizeFilled;
