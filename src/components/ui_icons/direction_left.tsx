import * as React from "react";
import { SVGProps } from "react";

const DirectionLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M8.44 17.56a1.5 1.5 0 0 0 2.12-2.12l-2.12 2.12ZM2 9 .94 7.94a1.5 1.5 0 0 0 0 2.12L2 9Zm8.56-6.44A1.5 1.5 0 0 0 8.44.44l2.12 2.12Zm0 12.88-7.5-7.5-2.12 2.12 7.5 7.5 2.12-2.12Zm-7.5-5.38 7.5-7.5L8.44.44l-7.5 7.5 2.12 2.12Z" />
      <path d="M20 10.5a1.5 1.5 0 1 0 0-3v3Zm-18-3a1.5 1.5 0 1 0 0 3v-3Zm18 0H2v3h18v-3Z" />
    </g>
  </svg>
);

export default DirectionLeft;
