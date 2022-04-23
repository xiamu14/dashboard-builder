import * as React from "react";
import { SVGProps } from "react";

const CodeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M14.293 12.707a1 1 0 0 1 0-1.414L17.586 8l-3.293-3.293a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0ZM5.707 12.707a1 1 0 0 0 0-1.414L2.414 8l3.293-3.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414 0ZM12.275.038a1 1 0 0 0-1.237.687l-4 14a1 1 0 1 0 1.923.55l4-14a1 1 0 0 0-.686-1.237Z" />
    </g>
  </svg>
);

export default CodeFilled;
