import * as React from "react";
import { SVGProps } from "react";

const CastLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-5.5a1 1 0 1 1 0-2H17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1.5a1 1 0 0 1-2 0V3Z" />
      <path d="M2 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fillRule="nonzero" />
      <path d="M0 11.5a1 1 0 0 1 1-1A4.5 4.5 0 0 1 5.5 15a1 1 0 0 1-2 0A2.5 2.5 0 0 0 1 12.5a1 1 0 0 1-1-1Z" />
      <path d="M0 8a1 1 0 0 1 1-1 8 8 0 0 1 8 8 1 1 0 0 1-2 0 6 6 0 0 0-6-6 1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default CastLight;
