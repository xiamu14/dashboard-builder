import * as React from "react";
import { SVGProps } from "react";

const BrushFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M1 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Z"
        fillRule="nonzero"
      />
      <path d="M2.145 13.306A2.499 2.499 0 0 1 0 10.833c0-.46.373-.833.833-.833h16.334c.46 0 .833.373.833.833a2.499 2.499 0 0 1-2.145 2.473l-2.988.427a2 2 0 0 0-1.71 2.146l.135 1.63a2.3 2.3 0 1 1-4.585 0l.136-1.63a2 2 0 0 0-1.71-2.146l-2.988-.427Z" />
    </g>
  </svg>
);

export default BrushFilled;
