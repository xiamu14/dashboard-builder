import * as React from "react";
import { SVGProps } from "react";

const LaughLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z" />
      <path d="M4.694 10.308A1 1 0 0 1 5.416 10h9.168a1 1 0 0 1 .999 1.042c-.051 1.222-.52 2.47-1.473 3.417C13.145 15.418 11.756 16 10 16c-1.756 0-3.145-.582-4.11-1.54-.952-.948-1.422-2.196-1.473-3.418a1 1 0 0 1 .277-.734ZM6.628 12c.149.387.373.743.673 1.04.544.542 1.405.96 2.699.96 1.294 0 2.155-.418 2.7-.96.299-.297.523-.653.672-1.04H6.628Z" />
      <path
        d="M7 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default LaughLight;
