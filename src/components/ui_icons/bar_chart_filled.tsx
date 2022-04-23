import * as React from "react";
import { SVGProps } from "react";

const BarChartFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M1 0a1 1 0 0 1 1 1v16a1 1 0 0 0 1 1h16a1 1 0 1 1 0 2H3a3 3 0 0 1-3-3V1a1 1 0 0 1 1-1Z" />
      <path d="M5 6a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM9 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1ZM13 2a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM17 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default BarChartFilled;
