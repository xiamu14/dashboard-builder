import * as React from "react";
import { SVGProps } from "react";

const RedoFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 10"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.966 7.743a7.589 7.589 0 0 1 9.294-5.366 7.439 7.439 0 0 1 4.891 4.173l-1.454-.395a1 1 0 0 0-.523 1.93l3.17.86a.996.996 0 0 0 .108.03l.406.11a1 1 0 0 0 1.228-.707l.988-3.687a1 1 0 1 0-1.932-.518l-.327 1.218A9.424 9.424 0 0 0 11.778.445 9.589 9.589 0 0 0 .034 7.225a1 1 0 1 0 1.932.518Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default RedoFilled;
