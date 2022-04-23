import * as React from "react";
import { SVGProps } from "react";

const BusLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fillRule="nonzero"
      />
      <path d="M19 7v8a3.001 3.001 0 0 1-2 2.83V19a1 1 0 1 1-2 0v-1H5v1a1 1 0 1 1-2 0v-1.17A3.001 3.001 0 0 1 1 15V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1 3 3 0 0 1 3-3h12a3 3 0 0 1 3 3 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM4 2h12a1 1 0 0 1 1 1v6H3V3a1 1 0 0 1 1-1Zm-1 9v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4H3Z" />
    </g>
  </svg>
);

export default BusLight;
