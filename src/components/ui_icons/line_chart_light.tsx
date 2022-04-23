import * as React from "react";
import { SVGProps } from "react";

const LineChartLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M1 0a1 1 0 0 1 1 1v16a1 1 0 0 0 1 1h16a1 1 0 1 1 0 2H3a3 3 0 0 1-3-3V1a1 1 0 0 1 1-1Z" />
      <path d="M19.707 6.293a1 1 0 0 1 0 1.414l-4.586 4.586a3 3 0 0 1-4.242 0L8.707 10.12a1 1 0 0 0-1.414 0l-2.086 2.086a1 1 0 0 1-1.414-1.414l2.086-2.086a3 3 0 0 1 4.242 0l2.172 2.172a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 1 1.414 0Z" />
    </g>
  </svg>
);

export default LineChartLight;
