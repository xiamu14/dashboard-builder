import * as React from "react";
import { SVGProps } from "react";

const FastBackwardLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="m16.4 9.8-4-3a1 1 0 0 1 0-1.6l4-3A1 1 0 0 1 18 3v6a1 1 0 0 1-1.6.8Zm-5.2-1.4a3 3 0 0 1 0-4.8l4-3C17.178-.883 20 .528 20 3v6c0 2.472-2.822 3.883-4.8 2.4l-4-3Z" />
      <path d="m6.4 9.8-4-3a1 1 0 0 1 0-1.6l4-3A1 1 0 0 1 8 3v6a1 1 0 0 1-1.6.8ZM1.2 8.4a3 3 0 0 1 0-4.8l4-3C7.178-.883 10 .528 10 3v6c0 2.472-2.822 3.883-4.8 2.4l-4-3Z" />
    </g>
  </svg>
);

export default FastBackwardLight;
