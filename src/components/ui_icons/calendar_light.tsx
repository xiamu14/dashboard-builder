import * as React from "react";
import { SVGProps } from "react";

const CalendarLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 0a1 1 0 0 1 1 1v1h8V1a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1V1a1 1 0 0 1 1-1Zm9 4v1a1 1 0 1 0 2 0V4h1a1 1 0 0 1 1 1v3H2V5a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V4h8ZM2 10v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7H2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CalendarLight;
