import * as React from "react";
import { SVGProps } from "react";

const CloudLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.4 5.035A2 2 0 0 1 5.937 6.15 3 3 0 1 0 5 12h8a5 5 0 1 0-4.6-6.965ZM6.561 4.25A5 5 0 1 0 5 14h8a7 7 0 1 0-6.439-9.751Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CloudLight;
