import * as React from "react";
import { SVGProps } from "react";

const MicLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M8 9V3a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0ZM7 0a3 3 0 0 0-3 3v6a3 3 0 1 0 6 0V3a3 3 0 0 0-3-3Z" />
      <path
        d="M2 9a1 1 0 0 0-2 0 7.002 7.002 0 0 0 6 6.93V18H4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8v-2.07A7.002 7.002 0 0 0 14 9a1 1 0 1 0-2 0A5 5 0 0 1 2 9Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default MicLight;
