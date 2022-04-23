import * as React from "react";
import { SVGProps } from "react";

const SearchLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0Zm.032 5.618a9 9 0 1 0-1.414 1.414l2.675 2.675a1 1 0 0 0 1.414-1.414l-2.675-2.675Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default SearchLight;
