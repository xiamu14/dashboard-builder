import * as React from "react";
import { SVGProps } from "react";

const PieChartLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M7 6.084A6 6 0 1 0 13.916 13H8a1 1 0 0 1-1-1V6.084Zm-3.445-.736A8 8 0 0 1 8 4a1 1 0 0 1 1 1v6h6a1 1 0 0 1 1 1A8 8 0 1 1 3.555 5.348Z" />
      <path d="M11.293.293A1 1 0 0 1 12 0a8 8 0 0 1 8 8 1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V1a1 1 0 0 1 .293-.707ZM13 2.083V7h4.916A6 6 0 0 0 13 2.084Z" />
    </g>
  </svg>
);

export default PieChartLight;
