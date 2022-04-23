import * as React from "react";
import { SVGProps } from "react";

const PreviousFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M5.396 5.414c-1.972 1.16-1.972 4.012 0 5.172l8.083 4.755c2 1.176 4.521-.266 4.521-2.586v-9.51C18 .925 15.479-.517 13.479.66L5.396 5.414Z"
        fillRule="nonzero"
      />
      <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z" />
    </g>
  </svg>
);

export default PreviousFilled;
