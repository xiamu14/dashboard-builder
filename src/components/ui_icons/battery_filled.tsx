import * as React from "react";
import { SVGProps } from "react";

const BatteryFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      transform="translate(-6 -2)"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    >
      <rect fillRule="nonzero" x={6} y={5} width={12} height={17} rx={3} />
      <path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default BatteryFilled;
