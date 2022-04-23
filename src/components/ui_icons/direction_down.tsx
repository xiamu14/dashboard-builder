import * as React from "react";
import { SVGProps } from "react";

const DirectionDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M17.56 13.56a1.5 1.5 0 0 0-2.12-2.12l2.12 2.12ZM9 20l-1.06 1.06a1.5 1.5 0 0 0 2.12 0L9 20Zm-6.44-8.56a1.5 1.5 0 0 0-2.12 2.12l2.12-2.12Zm12.88 0-7.5 7.5 2.12 2.12 7.5-7.5-2.12-2.12Zm-5.38 7.5-7.5-7.5-2.12 2.12 7.5 7.5 2.12-2.12Z" />
      <path d="M10.5 2a1.5 1.5 0 1 0-3 0h3Zm-3 18a1.5 1.5 0 1 0 3 0h-3Zm0-18v18h3V2h-3Z" />
    </g>
  </svg>
);

export default DirectionDown;
