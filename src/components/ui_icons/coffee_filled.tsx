import * as React from "react";
import { SVGProps } from "react";

const CoffeeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M0 17.5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM3 0a2 2 0 0 0-2 2v8a5 5 0 0 0 5 5h5a5 5 0 0 0 4.989-4.663l1.96-.653A3 3 0 0 0 20 6.838V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2-2H3Zm13 8.225V4h2v2.838a1 1 0 0 1-.684.948L16 8.226Z" />
    </g>
  </svg>
);

export default CoffeeFilled;
