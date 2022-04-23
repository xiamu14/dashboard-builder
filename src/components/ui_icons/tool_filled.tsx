import * as React from "react";
import { SVGProps } from "react";

const ToolFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.15.131c.676.143.825.965.337 1.453l-1.588 1.588A2 2 0 1 0 14.728 6l1.587-1.587c.488-.488 1.31-.34 1.453.336a6.002 6.002 0 0 1-8.456 6.666l-5.898 5.899a2 2 0 1 1-2.828-2.829l5.898-5.898A6.002 6.002 0 0 1 13.15.131Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default ToolFilled;
