import * as React from "react";
import { SVGProps } from "react";

const CastFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M3 0a3 3 0 0 0-3 3v1.68c0 .485.515.82 1 .82a9.5 9.5 0 0 1 9.5 9.5c0 .485.335 1 .82 1H17a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z"
        fillRule="nonzero"
      />
      <path d="M0 8a1 1 0 0 1 1-1 8 8 0 0 1 8 8 1 1 0 0 1-2 0 6 6 0 0 0-6-6 1 1 0 0 1-1-1Z" />
      <path d="M0 11.5a1 1 0 0 1 1-1A4.5 4.5 0 0 1 5.5 15a1 1 0 0 1-2 0A2.5 2.5 0 0 0 1 12.5a1 1 0 0 1-1-1Z" />
      <path d="M2 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fillRule="nonzero" />
    </g>
  </svg>
);

export default CastFilled;
