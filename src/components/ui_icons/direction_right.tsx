import * as React from "react";
import { SVGProps } from "react";

const DirectionRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M13.56.44a1.5 1.5 0 0 0-2.12 2.12L13.56.44ZM20 9l1.06 1.06a1.5 1.5 0 0 0 0-2.12L20 9Zm-8.56 6.44a1.5 1.5 0 0 0 2.12 2.12l-2.12-2.12Zm0-12.88 7.5 7.5 2.12-2.12-7.5-7.5-2.12 2.12Zm7.5 5.38-7.5 7.5 2.12 2.12 7.5-7.5-2.12-2.12Z" />
      <path d="M2 7.5a1.5 1.5 0 1 0 0 3v-3Zm18 3a1.5 1.5 0 1 0 0-3v3Zm-18 0h18v-3H2v3Z" />
    </g>
  </svg>
);

export default DirectionRight;
