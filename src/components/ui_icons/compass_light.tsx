import * as React from "react";
import { SVGProps } from "react";

const CompassLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10-8c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10Z" />
      <path d="M12.082 7.918 9.053 9.053l-1.135 3.03 3.029-1.136 1.135-3.03Zm1.358-2.646L8.351 7.181a2 2 0 0 0-1.17 1.17l-1.909 5.09c-.301.803.484 1.588 1.288 1.287l5.089-1.909a2 2 0 0 0 1.17-1.17l1.909-5.09c.301-.803-.484-1.588-1.288-1.287Z" />
    </g>
  </svg>
);

export default CompassLight;
