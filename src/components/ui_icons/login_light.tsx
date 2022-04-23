import * as React from "react";
import { SVGProps } from "react";

const LoginLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M9.707 5.793a1 1 0 0 0-1.414 1.414L10.086 9H1a1 1 0 0 0 0 2h9.086l-1.793 1.793a1 1 0 0 0 1.414 1.414l2.793-2.793a2 2 0 0 0 0-2.828L9.707 5.793Z"
        fillRule="nonzero"
      />
      <path d="M18 3a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v1a1 1 0 1 0 2 0V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1a1 1 0 1 0-2 0v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V3Z" />
    </g>
  </svg>
);

export default LoginLight;
