import * as React from "react";
import { SVGProps } from "react";

const LeaderboardFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M7 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V2ZM15 8a1 1 0 0 1 1-1h2a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8ZM0 7a2 2 0 0 1 2-2h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7Z" />
    </g>
  </svg>
);

export default LeaderboardFilled;
