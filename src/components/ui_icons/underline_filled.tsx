import * as React from "react";
import { SVGProps } from "react";

const UnderlineFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M0 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM1 0a1 1 0 0 1 1 1v8a5 5 0 0 0 10 0V1a1 1 0 1 1 2 0v8A7 7 0 1 1 0 9V1a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default UnderlineFilled;
