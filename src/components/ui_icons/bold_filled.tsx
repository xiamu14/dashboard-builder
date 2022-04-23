import * as React from "react";
import { SVGProps } from "react";

const BoldFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 13 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 3.273A3.273 3.273 0 0 1 3.273 0H7a5 5 0 0 1 3.436 8.632A5 5 0 0 1 8 18H3.25A3.25 3.25 0 0 1 0 14.75V3.273ZM3.273 2H7a3 3 0 0 1 0 6H2V3.273C2 2.57 2.57 2 3.273 2ZM2 10v4.75c0 .69.56 1.25 1.25 1.25H8a3 3 0 1 0 0-6H2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default BoldFilled;
