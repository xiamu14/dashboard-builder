import * as React from "react";
import { SVGProps } from "react";

const PersonFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M0 16v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5ZM13.5 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
    </g>
  </svg>
);

export default PersonFilled;
