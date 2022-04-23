import * as React from "react";
import { SVGProps } from "react";

const SlackFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M6.5 2.5a2 2 0 1 1 4 0V4a.5.5 0 0 1-.5.5H8.5a2 2 0 0 1-2-2ZM3 5.5a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 0 0-5H3ZM21.5 14a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1 0-5h5a2.5 2.5 0 0 1 2.5 2.5ZM15.5 19.5a2 2 0 1 1-4 0V18a.5.5 0 0 1 .5-.5h1.5a2 2 0 0 1 2 2ZM8 21.5A2.5 2.5 0 0 1 5.5 19v-5a2.5 2.5 0 0 1 5 0v5A2.5 2.5 0 0 1 8 21.5ZM2.5 15.5a2 2 0 1 1 0-4H4a.5.5 0 0 1 .5.5v1.5a2 2 0 0 1-2 2ZM14 .5A2.5 2.5 0 0 1 16.5 3v5a2.5 2.5 0 0 1-5 0V3A2.5 2.5 0 0 1 14 .5ZM19.5 6.5a2 2 0 1 1 0 4H18a.5.5 0 0 1-.5-.5V8.5a2 2 0 0 1 2-2Z" />
    </g>
  </svg>
);

export default SlackFilled;
