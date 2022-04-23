import * as React from "react";
import { SVGProps } from "react";

const BatteryChargingFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M3 3a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H3Zm4.707 6.207a1 1 0 0 0-1.414-1.414l-3 3A1 1 0 0 0 4 12.5h1.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3A1 1 0 0 0 8 10.5H6.414l1.293-1.293ZM4 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default BatteryChargingFilled;
