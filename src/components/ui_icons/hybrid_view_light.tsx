import * as React from "react";
import { SVGProps } from "react";

const HybridViewLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M17 2h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-4-2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3h-4ZM0 2a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1ZM0 6a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1ZM0 10a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1ZM0 14a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default HybridViewLight;
