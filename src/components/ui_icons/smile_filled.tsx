import * as React from "react";
import { SVGProps } from "react";

const SmileFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm-3.668-8.4a1 1 0 1 0-1.832.8 6.001 6.001 0 0 0 11 0 1 1 0 0 0-1.832-.8 4.001 4.001 0 0 1-7.336 0ZM7 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default SmileFilled;
