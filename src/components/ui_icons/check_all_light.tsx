import * as React from "react";
import { SVGProps } from "react";

const CheckAllLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 11"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="m9.95 6.464 4.757-4.757A1 1 0 0 0 13.293.293L8.536 5.05 9.95 6.464ZM6.294 9.88 4.307 7.891a1.056 1.056 0 0 1-.014-.013L1.707 5.293A1 1 0 0 0 .293 6.707l2.586 2.586c.923.924 2.3 1.119 3.415.586Z" />
      </g>
      <path d="M19.707.243a1 1 0 0 1 0 1.414l-7.636 7.636a3 3 0 0 1-4.242 0L5.243 6.707a1 1 0 1 1 1.414-1.414l2.586 2.586a1 1 0 0 0 1.414 0L18.293.243a1 1 0 0 1 1.414 0Z" />
    </g>
  </svg>
);

export default CheckAllLight;
