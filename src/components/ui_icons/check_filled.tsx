import * as React from "react";
import { SVGProps } from "react";

const CheckFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.707.293a1 1 0 0 1 0 1.414l-8.586 8.586a3 3 0 0 1-4.242 0L.293 6.707a1 1 0 1 1 1.414-1.414l3.586 3.586a1 1 0 0 0 1.414 0L15.293.293a1 1 0 0 1 1.414 0Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CheckFilled;
