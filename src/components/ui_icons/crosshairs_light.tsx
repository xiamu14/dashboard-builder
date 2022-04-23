import * as React from "react";
import { SVGProps } from "react";

const CrosshairsLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M10 0a1 1 0 0 1 1 1v1.062A8.004 8.004 0 0 1 17.938 9H19a1 1 0 1 1 0 2h-1.062A8.004 8.004 0 0 1 11 17.938V19a1 1 0 1 1-2 0v-1.062A8.004 8.004 0 0 1 2.062 11H1a1 1 0 1 1 0-2h1.062A8.004 8.004 0 0 1 9 2.062V1a1 1 0 0 1 1-1Zm0 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    </g>
  </svg>
);

export default CrosshairsLight;
