import * as React from "react";
import { SVGProps } from "react";

const HelpLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z" />
      <path d="M11 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fillRule="nonzero" />
      <path d="M10 6c-.87 0-1.611.555-1.886 1.333a1 1 0 1 1-1.886-.666A4.001 4.001 0 1 1 11 11.874V13a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1 2 2 0 1 0 0-4Z" />
    </g>
  </svg>
);

export default HelpLight;
