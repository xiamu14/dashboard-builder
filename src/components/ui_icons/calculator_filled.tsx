import * as React from "react";
import { SVGProps } from "react";

const CalculatorFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Zm0 2a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm0 12a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H3Zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CalculatorFilled;
