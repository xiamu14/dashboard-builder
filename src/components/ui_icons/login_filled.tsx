import * as React from "react";
import { SVGProps } from "react";

const LoginFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M15 0a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6h4.086l-1.793 1.793a1 1 0 1 0 1.414 1.414l2.793-2.793a2 2 0 0 0 0-2.828L9.707 5.793a1 1 0 0 0-1.414 1.414L10.086 9H6V3a3 3 0 0 1 3-3h6ZM6 9v2H1a1 1 0 1 1 0-2h5Z" />
    </g>
  </svg>
);

export default LoginFilled;
