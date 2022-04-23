import * as React from "react";
import { SVGProps } from "react";

const LockLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M9 13.732a2 2 0 1 0-2 0V15a1 1 0 0 0 2 0v-1.268Z"
        fillRule="nonzero"
      />
      <path d="M3 6V5a5 5 0 0 1 10 0v1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm2-1a3 3 0 0 1 6 0v1H5V5ZM2 9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Z" />
    </g>
  </svg>
);

export default LockLight;
