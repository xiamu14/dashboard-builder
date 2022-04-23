import * as React from "react";
import { SVGProps } from "react";

const SlackLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M8 7.5H3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1Zm-5-2a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 0 0-5H3ZM8.5.5a2 2 0 0 0 0 4h1a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2ZM14 14.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm5 2a2.5 2.5 0 0 0 0-5h-5a2.5 2.5 0 0 0 0 5h5ZM13.5 21.5a2 2 0 0 0 0-4h-1a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2ZM7.5 14v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0Zm-2 5a2.5 2.5 0 0 0 5 0v-5a2.5 2.5 0 0 0-5 0v5ZM.5 13.5a2 2 0 0 0 4 0v-1a1 1 0 0 0-1-1h-1a2 2 0 0 0-2 2ZM14.5 8V3a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0Zm2-5a2.5 2.5 0 0 0-5 0v5a2.5 2.5 0 0 0 5 0V3ZM21.5 8.5a2 2 0 0 0-4 0v1a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2Z" />
    </g>
  </svg>
);

export default SlackLight;
