import * as React from "react";
import { SVGProps } from "react";

const KeyFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 12a6 6 0 1 0-5.197-9h-5.39a1 1 0 0 0-.707.293l-2 2a1 1 0 0 0 .001 1.414l2 2A1 1 0 0 0 3.414 9h5.389A5.998 5.998 0 0 0 14 12Zm2-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default KeyFilled;
