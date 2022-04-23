import * as React from "react";
import { SVGProps } from "react";

const ArrowBackwardFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.707 13.793a1 1 0 1 1-1.414 1.414L1.5 9.414a2 2 0 0 1 0-2.828L7.293.793a1 1 0 1 1 1.414 1.414L3.914 7H18a1 1 0 1 1 0 2H3.914l4.793 4.793Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default ArrowBackwardFilled;
