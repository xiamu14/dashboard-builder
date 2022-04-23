import * as React from "react";
import { SVGProps } from "react";

const RupeeLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 1a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8.724c.478.579.84 1.258 1.05 2H13a1 1 0 1 1 0 2H9.959a5.5 5.5 0 0 1-5.478 5H3.188l5.609 7.396a1 1 0 0 1-1.594 1.208l-6.111-8.058C.299 10.501 1.045 9 2.356 9h2.125a3.5 3.5 0 0 0 3.465-3H1a1 1 0 0 1 0-2h6.644a3.5 3.5 0 0 0-3.163-2H1a1 1 0 0 1-1-1Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default RupeeLight;
