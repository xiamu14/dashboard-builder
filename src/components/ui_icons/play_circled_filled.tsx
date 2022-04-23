import * as React from "react";
import { SVGProps } from "react";

const PlayCircledFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.392-8.268c1.334-.77 1.334-2.694 0-3.464L9 5.732c-1.333-.77-3 .192-3 1.732v5.072c0 1.54 1.667 2.502 3 1.732l4.392-2.536Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default PlayCircledFilled;
