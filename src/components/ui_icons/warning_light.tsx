import * as React from "react";
import { SVGProps } from "react";

const WarningLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 12a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1Z" />
      <path d="M17.674 14.505 10.869 2.564a1 1 0 0 0-1.738 0l-6.805 11.94A1 1 0 0 0 3.195 16h13.61a1 1 0 0 0 .869-1.495ZM12.606 1.574c-1.15-2.02-4.062-2.02-5.212 0L.589 13.514C-.551 15.515.893 18 3.195 18h13.61c2.302 0 3.746-2.485 2.606-4.485L12.606 1.574Z" />
      <path d="M11 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fillRule="nonzero" />
    </g>
  </svg>
);

export default WarningLight;
