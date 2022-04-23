import * as React from "react";
import { SVGProps } from "react";

const DumbellLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M4 0a1 1 0 0 1 1 1v4h10V1a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V7H5v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z"
        fillRule="nonzero"
      />
      <path d="M1 2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1ZM19 2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default DumbellLight;
