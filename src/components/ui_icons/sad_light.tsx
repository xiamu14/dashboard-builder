import * as React from "react";
import { SVGProps } from "react";

const SadLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z" />
      <path d="M5.016 14.916a1 1 0 0 0 1.316-.516 4.001 4.001 0 0 1 7.336 0 1 1 0 0 0 1.832-.8 6.001 6.001 0 0 0-11 0 1 1 0 0 0 .516 1.316Z" />
      <path
        d="M7 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SadLight;
