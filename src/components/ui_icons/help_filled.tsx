import * as React from "react";
import { SVGProps } from "react";

const HelpFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10Zm-9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8.114 7.333A2.001 2.001 0 0 1 12 8a2 2 0 0 1-2 2 1 1 0 0 0-1 1v1.5a1 1 0 1 0 2 0v-.626A4.002 4.002 0 0 0 10 4a4.001 4.001 0 0 0-3.772 2.667 1 1 0 0 0 1.886.666Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default HelpFilled;
