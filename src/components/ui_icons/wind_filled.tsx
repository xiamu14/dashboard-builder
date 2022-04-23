import * as React from "react";
import { SVGProps } from "react";

const WindFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M6 2a1 1 0 0 0-.867.5 1 1 0 1 1-1.731-1A3 3 0 0 1 9 3a3 3 0 0 1-3 3H1a1 1 0 0 1 0-2h5a1 1 0 0 0 0-2ZM11 16a1 1 0 0 1-.867-.5 1 1 0 0 0-1.731 1A3 3 0 0 0 14 15a3 3 0 0 0-3-3H1a1 1 0 0 0 0 2h10a1 1 0 1 1 0 2Z" />
      <path d="M14 4c-.87 0-1.611.555-1.886 1.333a1 1 0 1 1-1.886-.666A4.001 4.001 0 1 1 14 10H1a1 1 0 0 1 0-2h13a2 2 0 1 0 0-4Z" />
    </g>
  </svg>
);

export default WindFilled;
