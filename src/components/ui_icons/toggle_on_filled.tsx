import * as React from "react";
import { SVGProps } from "react";

const ToggleOnFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 7a7 7 0 0 1 7-7h6a7 7 0 1 1 0 14H7a7 7 0 0 1-7-7Zm13-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ToggleOnFilled;
