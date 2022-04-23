import * as React from "react";
import { SVGProps } from "react";

const CoffeeLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M15.989 10.337A5 5 0 0 1 11 15H6a5 5 0 0 1-5-5V2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v2.838a3 3 0 0 1-2.051 2.846l-1.96.653ZM3 2h11v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V2Zm13 6.225 1.316-.439A1 1 0 0 0 18 6.838V4h-2v4.225ZM0 17a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default CoffeeLight;
