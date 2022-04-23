import * as React from "react";
import { SVGProps } from "react";

const TableTennisFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M9.615 17.628c.273-.273.678-.359 1.051-.263a7 7 0 1 0-5.032-5.032c.097.374.012.779-.261 1.052l-.737.736a3 3 0 0 0 4.243 4.243l.736-.736ZM6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </g>
  </svg>
);

export default TableTennisFilled;
