import * as React from "react";
import { SVGProps } from "react";

const ZoomInFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M16.032 14.618a9 9 0 1 0-1.414 1.414l2.675 2.675a1 1 0 0 0 1.414-1.414l-2.675-2.675ZM16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0Z" />
      <path
        d="M10 6a1 1 0 0 0-2 0v2H6a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2V6Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default ZoomInFilled;
