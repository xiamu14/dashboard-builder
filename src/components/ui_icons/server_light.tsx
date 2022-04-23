import * as React from "react";
import { SVGProps } from "react";

const ServerLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M15 13H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1ZM3 11a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H3ZM15 2H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" />
      <path d="M3.5 15.5a1 1 0 0 1 1-1H10a1 1 0 0 1 0 2H4.5a1 1 0 0 1-1-1ZM3.5 4.5a1 1 0 0 1 1-1H10a1 1 0 0 1 0 2H4.5a1 1 0 0 1-1-1Z" />
      <path
        d="M14.5 15.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM14.5 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default ServerLight;
