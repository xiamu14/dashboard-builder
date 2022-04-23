import * as React from "react";
import { SVGProps } from "react";

const FastBackwardFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.667 9a2.5 2.5 0 0 1 0-4L7 1c1.648-1.236 4-.06 4 2v2.75c.163-.283.385-.539.667-.75L17 1c1.648-1.236 4-.06 4 2v8c0 2.06-2.352 3.236-4 2l-5.333-4A2.493 2.493 0 0 1 11 8.25V11c0 2.06-2.352 3.236-4 2L1.667 9Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default FastBackwardFilled;
