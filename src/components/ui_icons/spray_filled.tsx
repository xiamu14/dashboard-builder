import * as React from "react";
import { SVGProps } from "react";

const SprayFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      transform="translate(-6 -2)"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    >
      <rect x={6} y={8} width={10} height={14} rx={3} />
      <path d="M9 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a.5.5 0 0 1-.5.5h-3A.5.5 0 0 1 9 6V4ZM17 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </g>
  </svg>
);

export default SprayFilled;
