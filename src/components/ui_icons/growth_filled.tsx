import * as React from "react";
import { SVGProps } from "react";

const GrowthFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M1 0a1 1 0 0 1 1 1v16a1 1 0 0 0 1 1h16a1 1 0 1 1 0 2H3a3 3 0 0 1-3-3V1a1 1 0 0 1 1-1Z" />
      <path
        d="M15 4.5a1 1 0 1 0 0 2h1.586L12.5 10.586 9.914 8a2 2 0 0 0-2.828 0l-2.793 2.793a1 1 0 0 0 1.414 1.414L8.5 9.414 11.086 12a2 2 0 0 0 2.828 0L18 7.914V9.5a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1h-4Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default GrowthFilled;
