import * as React from "react";
import { SVGProps } from "react";

const PersonLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M9 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2A5 5 0 1 0 9 0a5 5 0 0 0 0 10ZM6 14a4 4 0 0 0-4 4v1a1 1 0 0 1-2 0v-1a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v1a1 1 0 1 1-2 0v-1a4 4 0 0 0-4-4H6Z" />
    </g>
  </svg>
);

export default PersonLight;
