import * as React from "react";
import { SVGProps } from "react";

const DropFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.272 7.34a8.615 8.615 0 0 1 1.763 5.254C17.035 17.236 13.437 21 9 21 4.562 21 .965 17.236.965 12.594c0-1.988.66-3.815 1.762-5.254l.007-.009C4.594 4.727 6.242 2.504 7.679.663c.69-.884 1.952-.884 2.642 0 1.443 1.845 3.095 4.07 4.956 6.677h-.005Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default DropFilled;
