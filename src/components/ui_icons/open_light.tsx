import * as React from "react";
import { SVGProps } from "react";

const OpenLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M16 6a1 1 0 1 0 2 0V2a2 2 0 0 0-2-2h-4a1 1 0 0 0 0 2h2.586L8.293 8.293a1 1 0 0 0 1.414 1.414L16 3.414V6Z"
        fillRule="nonzero"
      />
      <path d="M0 3a3 3 0 0 1 3-3h5a1 1 0 0 1 0 2H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 1 1 2 0v5a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Z" />
    </g>
  </svg>
);

export default OpenLight;
