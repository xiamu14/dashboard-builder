import * as React from "react";
import { SVGProps } from "react";

const WebDevelopmentFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M1 8a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a1 1 0 0 0-1-1H1Zm12.293 7.007a1 1 0 0 0 1.414 1.414l1.714-1.714a1 1 0 0 0 0-1.414l-1.714-1.714a1 1 0 1 0-1.414 1.414L14.3 14l-1.007 1.007Zm-6.586 1.414a1 1 0 0 0 0-1.414L5.7 14l1.007-1.007a1 1 0 0 0-1.414-1.414l-1.714 1.714a1 1 0 0 0 0 1.414l1.714 1.714a1 1 0 0 0 1.414 0Zm3.189-5.696a1 1 0 0 1 1.923.55l-1.715 6a1 1 0 1 1-1.923-.55l1.715-6ZM3 0a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a3 3 0 0 0-3-3H3Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </g>
  </svg>
);

export default WebDevelopmentFilled;
