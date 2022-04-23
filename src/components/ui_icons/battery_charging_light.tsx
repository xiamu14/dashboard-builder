import * as React from "react";
import { SVGProps } from "react";

const BatteryChargingLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M9 5H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM3 3a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H3ZM4 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z" />
      <path d="M7.707 7.793a1 1 0 0 1 0 1.414L6.414 10.5H8a1 1 0 0 1 .707 1.707l-3 3a1 1 0 0 1-1.414-1.414L5.586 12.5H4a1 1 0 0 1-.707-1.707l3-3a1 1 0 0 1 1.414 0Z" />
    </g>
  </svg>
);

export default BatteryChargingLight;
