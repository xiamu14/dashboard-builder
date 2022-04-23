import * as React from "react";
import { SVGProps } from "react";

const CloudCheckFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 14a7 7 0 1 0-6.439-9.751A5 5 0 1 0 5 14h8Zm-2.793-3.293 3-3a1 1 0 0 0-1.414-1.414L9.5 8.586l-.793-.793a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.414 0Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CloudCheckFilled;
