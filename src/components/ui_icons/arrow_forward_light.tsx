import * as React from "react";
import { SVGProps } from "react";

const ArrowForwardLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.293 13.793a1 1 0 1 0 1.414 1.414L17.5 9.414a2 2 0 0 0 0-2.828L11.707.793a1 1 0 1 0-1.414 1.414L15.086 7H1a1 1 0 0 0 0 2h14.086l-4.793 4.793Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default ArrowForwardLight;
