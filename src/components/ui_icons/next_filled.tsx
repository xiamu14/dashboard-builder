import * as React from "react";
import { SVGProps } from "react";

const NextFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M12.604 5.414c1.972 1.16 1.972 4.012 0 5.172L4.521 15.34C2.521 16.517 0 15.075 0 12.755v-9.51C0 .925 2.521-.517 4.521.66l8.083 4.755Z"
        fillRule="nonzero"
      />
      <path d="M17 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default NextFilled;
