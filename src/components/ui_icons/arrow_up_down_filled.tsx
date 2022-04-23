import * as React from "react";
import { SVGProps } from "react";

const ArrowUpDownFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M1.707 6.207A1 1 0 1 1 .293 4.793L3.586 1.5a2 2 0 0 1 2.828 0l3.293 3.293a1 1 0 0 1-1.414 1.414L6 3.914V16a1 1 0 1 1-2 0V3.914L1.707 6.207ZM16 2a1 1 0 0 0-2 0v12.086l-2.293-2.293a1 1 0 0 0-1.414 1.414l3.293 3.293a2 2 0 0 0 2.828 0l3.293-3.293a1 1 0 0 0-1.414-1.414L16 14.086V2Z" />
    </g>
  </svg>
);

export default ArrowUpDownFilled;
