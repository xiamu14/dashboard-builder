import * as React from "react";
import { SVGProps } from "react";

const ParagraphFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 6a6 6 0 0 1 6-6h10a1 1 0 1 1 0 2h-1v17a1 1 0 1 1-2 0V2h-3v17a1 1 0 1 1-2 0v-7H6a6 6 0 0 1-6-6Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default ParagraphFilled;
