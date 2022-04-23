import * as React from "react";
import { SVGProps } from "react";

const ScanFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M5 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5 2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 13.5ZM5 6.5A2.5 2.5 0 0 1 7.5 4h5A2.5 2.5 0 0 1 15 6.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4Z"
        fillRule="nonzero"
      />
      <path d="M0 10a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 3a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H3a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V3ZM0 17a3 3 0 0 0 3 3h2a1 1 0 0 0 0-2H3a1 1 0 0 1-1-1v-2a1 1 0 0 0-2 0v2ZM20 17a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2ZM20 3a3 3 0 0 0-3-3h-2a1 1 0 0 0 0 2h2a1 1 0 0 1 1 1v2a1 1 0 0 0 2 0V3Z" />
    </g>
  </svg>
);

export default ScanFilled;
