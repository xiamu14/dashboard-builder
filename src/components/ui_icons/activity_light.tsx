import * as React from "react";
import { SVGProps } from "react";

const ActivityLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.408 2c-.369 0-.69.25-.78.609l-1.28 5.119A3 3 0 0 1 2.439 10H1a1 1 0 1 1 0-2h1.438a1 1 0 0 0 .97-.757l1.28-5.12a2.803 2.803 0 0 1 5.502.333l1.605 12.84a.803.803 0 0 0 1.576.096l1.28-5.12A3 3 0 0 1 17.561 8H19a1 1 0 1 1 0 2h-1.438a1 1 0 0 0-.97.758l-1.28 5.119a2.803 2.803 0 0 1-5.502-.333L8.205 2.704A.803.803 0 0 0 7.408 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ActivityLight;
