import * as React from "react";
import { SVGProps } from "react";

const RepeatLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M13.207.793a1 1 0 1 0-1.414 1.414l.789.79H7a7 7 0 0 0-7 7v1a1 1 0 0 0 2 0v-1a5 5 0 0 1 5-5h5.587l-.794.793a1 1 0 0 0 1.414 1.414l2.145-2.145a1.5 1.5 0 0 0 0-2.121L13.207.793ZM10.998 17a7 7 0 0 0 7-7V9a1 1 0 1 0-2 0v1a5 5 0 0 1-5 5H5.412l.794-.794a1 1 0 0 0-1.415-1.414l-2.145 2.145a1.5 1.5 0 0 0 0 2.121l2.145 2.145a1 1 0 0 0 1.415-1.414L5.416 17h5.582Z" />
    </g>
  </svg>
);

export default RepeatLight;
