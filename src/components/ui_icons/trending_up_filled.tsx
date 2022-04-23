import * as React from "react";
import { SVGProps } from "react";

const TrendingUpFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 0a1 1 0 1 0 0 2h2.586L11 7.586 8.414 5a2 2 0 0 0-2.828 0L.293 10.293a1 1 0 1 0 1.414 1.414L7 6.414 9.586 9a2 2 0 0 0 2.828 0L18 3.414V6a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1h-5Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default TrendingUpFilled;
