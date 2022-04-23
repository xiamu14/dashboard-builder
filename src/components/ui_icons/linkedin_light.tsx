import * as React from "react";
import { SVGProps } from "react";

const LinkedinLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M1 3a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1ZM6 4a1 1 0 0 0-2 0v9a1 1 0 1 0 2 0V8a3 3 0 0 1 6 0v5a1 1 0 1 0 2 0V8a5 5 0 0 0-8-4Z" />
      <path d="M2 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fillRule="nonzero" />
    </g>
  </svg>
);

export default LinkedinLight;
