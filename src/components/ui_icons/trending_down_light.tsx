import * as React from "react";
import { SVGProps } from "react";

const TrendingDownLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.586 10H14a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1V6a1 1 0 1 0-2 0v2.586L12.414 3a2 2 0 0 0-2.828 0L7 5.586 1.707.293A1 1 0 0 0 .293 1.707L5.586 7a2 2 0 0 0 2.828 0L11 4.414 16.586 10Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default TrendingDownLight;
