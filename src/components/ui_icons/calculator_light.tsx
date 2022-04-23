import * as React from "react";
import { SVGProps } from "react";

const CalculatorLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M13 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" />
      <path d="M4 3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4ZM4.5 15a1 1 0 1 0 0 2H8a1 1 0 0 0 0-2H4.5Z" />
      <path
        d="M5.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5.5 12.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 12.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12.5 12.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default CalculatorLight;
