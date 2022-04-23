import * as React from "react";
import { SVGProps } from "react";

const GroupLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M12.5 7.97a4 4 0 0 0 0-7.94A5.977 5.977 0 0 1 14 4a5.977 5.977 0 0 1-1.5 3.97ZM18 17a1 1 0 1 0 2 0v-2a5 5 0 0 0-4.698-4.991 8.008 8.008 0 0 1 2.304 3.503c.25.439.394.947.394 1.488v2Z"
        fillRule="nonzero"
      />
      <path d="M5 12a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H5ZM8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    </g>
  </svg>
);

export default GroupLight;
