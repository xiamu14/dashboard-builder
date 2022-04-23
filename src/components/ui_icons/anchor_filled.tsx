import * as React from "react";
import { SVGProps } from "react";

const AnchorFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 5.83a3.001 3.001 0 1 0-2 0v12.108A8.004 8.004 0 0 1 2.062 11H4a1 1 0 1 0 0-2H1a1 1 0 0 0-1 1c0 5.523 4.477 10 10 10s10-4.477 10-10a1 1 0 0 0-1-1h-3a1 1 0 1 0 0 2h1.938A8.004 8.004 0 0 1 11 17.938V5.83ZM11 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default AnchorFilled;
