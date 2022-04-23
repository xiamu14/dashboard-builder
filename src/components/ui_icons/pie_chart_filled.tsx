import * as React from "react";
import { SVGProps } from "react";

const PieChartFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M8 4a8 8 0 1 0 8 8 1 1 0 0 0-1-1h-5a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1Z" />
      <path d="M12 0a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1 8 8 0 0 0-8-8Z" />
    </g>
  </svg>
);

export default PieChartFilled;
