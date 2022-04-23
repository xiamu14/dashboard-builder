import * as React from "react";
import { SVGProps } from "react";

const TagFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.681 11.243a3 3 0 0 0 .87-2.351l-.404-5.253A3 3 0 0 0 16.386.88L11.133.473a3 3 0 0 0-2.351.87l-7.51 7.51a3 3 0 0 0 0 4.242l5.657 5.657a3 3 0 0 0 4.243 0l7.51-7.51Zm-6.095-5.925a1.5 1.5 0 1 0 2.121 2.121 1.5 1.5 0 0 0-2.121-2.121ZM8.343 14.51l-2.828-2.828a1 1 0 0 1 1.414-1.414l2.828 2.828a1 1 0 1 1-1.414 1.414Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default TagFilled;
