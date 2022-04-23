import * as React from "react";
import { SVGProps } from "react";

const FastForwardLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="m3.6 9.8 4-3a1 1 0 0 0 0-1.6l-4-3A1 1 0 0 0 2 3v6a1 1 0 0 0 1.6.8Zm5.2-1.4a3 3 0 0 0 0-4.8l-4-3C2.822-.883 0 .528 0 3v6c0 2.472 2.822 3.883 4.8 2.4l4-3Z" />
      <path d="m13.6 9.8 4-3a1 1 0 0 0 0-1.6l-4-3A1 1 0 0 0 12 3v6a1 1 0 0 0 1.6.8Zm5.2-1.4a3 3 0 0 0 0-4.8l-4-3C12.822-.883 10 .528 10 3v6c0 2.472 2.822 3.883 4.8 2.4l4-3Z" />
    </g>
  </svg>
);

export default FastForwardLight;
