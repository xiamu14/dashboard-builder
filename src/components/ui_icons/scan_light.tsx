import * as React from "react";
import { SVGProps } from "react";

const ScanLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M12 6H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM8 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H8ZM0 3a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H3a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V3ZM0 17a3 3 0 0 0 3 3h2a1 1 0 0 0 0-2H3a1 1 0 0 1-1-1v-2a1 1 0 0 0-2 0v2ZM20 17a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2ZM20 3a3 3 0 0 0-3-3h-2a1 1 0 0 0 0 2h2a1 1 0 0 1 1 1v2a1 1 0 0 0 2 0V3Z" />
      <path d="M0 10a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default ScanLight;
