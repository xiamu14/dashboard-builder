import * as React from "react";
import { SVGProps } from "react";

const RainLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M6.75 12.17a1 1 0 0 1 .586 1.288l-1.5 4a1 1 0 0 1-1.873-.702l1.5-4a1 1 0 0 1 1.288-.585ZM10.75 12.17a1 1 0 0 1 .586 1.288l-1.5 4a1 1 0 0 1-1.873-.702l1.5-4a1 1 0 0 1 1.288-.585ZM14.75 12.17a1 1 0 0 1 .586 1.288l-1.5 4a1 1 0 1 1-1.873-.702l1.5-4a1 1 0 0 1 1.288-.585Z" />
      <path d="M6.562 4.249a7 7 0 1 1 11.105 7.968 1 1 0 1 1-1.334-1.49 5 5 0 1 0-8.202-4.869 1 1 0 0 1-1.514.614A3 3 0 1 0 3.501 11.6a1 1 0 1 1-1.002 1.731 5 5 0 0 1 4.062-9.082Z" />
    </g>
  </svg>
);

export default RainLight;
