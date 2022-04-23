import * as React from "react";
import { SVGProps } from "react";

const ToggleOnLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M0 7a7 7 0 0 1 7-7h6a7 7 0 1 1 0 14H7a7 7 0 0 1-7-7Zm7-5a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H7Z" />
      <path d="M13 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM9.5 7a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z" />
    </g>
  </svg>
);

export default ToggleOnLight;
