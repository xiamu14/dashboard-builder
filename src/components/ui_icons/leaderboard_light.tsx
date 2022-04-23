import * as React from "react";
import { SVGProps } from "react";

const LeaderboardLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 7V3a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H3a3 3 0 0 0-3 3v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a3 3 0 0 0-3-3h-3Zm-3-5H9a1 1 0 0 0-1 1v9h4V3a1 1 0 0 0-1-1Zm3 7v3h4v-2a1 1 0 0 0-1-1h-3ZM3 7h3v5H2V8a1 1 0 0 1 1-1Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default LeaderboardLight;
