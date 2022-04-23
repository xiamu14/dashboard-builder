import * as React from "react";
import { SVGProps } from "react";

const MailLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 2h14a1 1 0 0 1 .888.54l-7.333 4.888a1 1 0 0 1-1.11 0L2.112 2.54A1 1 0 0 1 3 2ZM2 4.868V13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.868l-6.336 4.224a3 3 0 0 1-3.328 0L2 4.868ZM0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default MailLight;
