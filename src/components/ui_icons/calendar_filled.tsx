import * as React from "react";
import { SVGProps } from "react";

const CalendarFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M0 11a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-6ZM5 0a1 1 0 0 1 1 1v1h8V1a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5a3 3 0 0 1 3-3h1V1a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default CalendarFilled;
