import * as React from "react";
import { SVGProps } from "react";

const ChevronBackwardLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 9 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.707 15.207a1 1 0 0 0 0-1.414L2.914 8l5.793-5.793A1 1 0 1 0 7.293.793L1.5 6.586a2 2 0 0 0 0 2.828l5.793 5.793a1 1 0 0 0 1.414 0Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ChevronBackwardLight;
