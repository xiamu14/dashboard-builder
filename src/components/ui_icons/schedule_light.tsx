import * as React from "react";
import { SVGProps } from "react";

const ScheduleLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M6 1a1 1 0 0 0-2 0v1H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8.682a6.03 6.03 0 0 1-1.88-2H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V4h8v1a1 1 0 1 0 2 0V4h1a1 1 0 0 1 1 1v4.803a6.03 6.03 0 0 1 2 1.88V5a3 3 0 0 0-3-3h-1V1a1 1 0 1 0-2 0v1H6V1Z"
        fillRule="nonzero"
      />
      <path d="M15 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path d="M15 12a1 1 0 0 1 1 1v1.586l.707.707a1 1 0 0 1-1.414 1.414l-1-1A1 1 0 0 1 14 15v-2a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default ScheduleLight;
