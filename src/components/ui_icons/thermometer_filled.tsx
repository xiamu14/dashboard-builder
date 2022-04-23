import * as React from "react";
import { SVGProps } from "react";

const ThermometerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 10 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M3 12a2 2 0 0 1-.401 1.2 3 3 0 1 0 4.802 0A2 2 0 0 1 7 12V4a2 2 0 1 0-4 0v8ZM1 4a4 4 0 1 1 8 0v8a5 5 0 1 1-8 0V4Z" />
      <path d="M6 6a1 1 0 0 0-2 0v7.268a2 2 0 1 0 2 0V6Z" fillRule="nonzero" />
    </g>
  </svg>
);

export default ThermometerFilled;
