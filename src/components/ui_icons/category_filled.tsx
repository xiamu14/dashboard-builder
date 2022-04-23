import * as React from "react";
import { SVGProps } from "react";

const CategoryFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      transform="translate(-3 -3)"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    >
      <rect x={3} y={3} width={8} height={8} rx={3} />
      <rect x={3} y={13} width={8} height={8} rx={3} />
      <rect x={13} y={3} width={8} height={8} rx={3} />
      <rect x={13} y={13} width={8} height={8} rx={3} />
    </g>
  </svg>
);

export default CategoryFilled;
