import * as React from "react";
import { SVGProps } from "react";

const CropFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M4 0a1 1 0 0 1 1 1v13a1 1 0 0 0 1 1h13a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V1a1 1 0 0 1 1-1Z" />
      <path d="M0 4a1 1 0 0 1 1-1h13a3 3 0 0 1 3 3v13a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1H1a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default CropFilled;
