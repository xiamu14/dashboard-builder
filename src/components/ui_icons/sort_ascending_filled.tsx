import * as React from "react";
import { SVGProps } from "react";

const SortAscendingFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 17"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M5 1a1 1 0 0 0-2 0v12.086l-1.293-1.293a1 1 0 0 0-1.414 1.414L2.586 15.5a2 2 0 0 0 2.828 0l2.293-2.293a1 1 0 1 0-1.414-1.414L5 13.086V1Z"
        fillRule="nonzero"
      />
      <path d="M10 13a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2h-8a1 1 0 0 0-1 1ZM10 8a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1ZM10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default SortAscendingFilled;
