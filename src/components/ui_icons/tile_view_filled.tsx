import * as React from "react";
import { SVGProps } from "react";

const TileViewFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      transform="translate(-3 -4)"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    >
      <rect x={3} y={4} width={18} height={7} rx={3} />
      <rect x={3} y={13} width={18} height={7} rx={3} />
    </g>
  </svg>
);

export default TileViewFilled;
