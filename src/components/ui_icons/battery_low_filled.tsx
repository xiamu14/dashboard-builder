import * as React from "react";
import { SVGProps } from "react";

const BatteryLowFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M3 3a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H3Zm1 12a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H4ZM4 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default BatteryLowFilled;
