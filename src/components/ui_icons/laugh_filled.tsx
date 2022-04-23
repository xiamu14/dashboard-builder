import * as React from "react";
import { SVGProps } from "react";

const LaughFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm0-4c-3.44 0-5.324-1.855-5.85-3.968-.138-.552.325-1.032.895-1.032h9.91c.57 0 1.033.48.896 1.032C15.324 14.145 13.439 16 10 16ZM7 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default LaughFilled;
