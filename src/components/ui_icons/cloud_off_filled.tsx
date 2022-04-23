import * as React from "react";
import { SVGProps } from "react";

const CloudOffFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M7.322 5.906a6.99 6.99 0 0 0-.76 1.343A5 5 0 1 0 5 17h7.999c1.529 0 2.943-.49 4.094-1.322L7.322 5.906ZM18.533 14.289a7 7 0 0 0-9.821-9.821l9.82 9.82Z" />
      </g>
      <path d="M.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default CloudOffFilled;
