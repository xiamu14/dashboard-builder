import * as React from "react";
import { SVGProps } from "react";

const LogoutFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M9 0a3 3 0 0 1 3 3v6H7a1 1 0 1 0 0 2h5v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h6ZM12 11h3.086l-1.793 1.793a1 1 0 0 0 1.414 1.414l2.793-2.793a2 2 0 0 0 0-2.828l-2.793-2.793a1 1 0 1 0-1.414 1.414L15.086 9H12v2Z" />
    </g>
  </svg>
);

export default LogoutFilled;
