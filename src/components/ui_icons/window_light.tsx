import * as React from "react";
import { SVGProps } from "react";

const WindowLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1h14a1 1 0 0 1 1 1v3H2V3a1 1 0 0 1 1-1Zm15 6v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8h16Z" />
      <path
        d="M5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default WindowLight;
