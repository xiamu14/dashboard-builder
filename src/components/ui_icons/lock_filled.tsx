import * as React from "react";
import { SVGProps } from "react";

const LockFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 5v1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3V5A5 5 0 0 0 3 5Zm5-3a3 3 0 0 0-3 3v1h6V5a3 3 0 0 0-3-3Zm2 10a2 2 0 0 1-1 1.732V15a1 1 0 1 1-2 0v-1.268A2 2 0 0 1 8 10a2 2 0 0 1 2 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default LockFilled;
