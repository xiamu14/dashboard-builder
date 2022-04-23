import * as React from "react";
import { SVGProps } from "react";

const TrophyFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 0a2 2 0 0 0-2 2H2a2 2 0 0 0-2 2v2a4 4 0 0 0 4 4h.29A7.008 7.008 0 0 0 10 14.93V18H7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-3.07A7.008 7.008 0 0 0 17.71 10H18a4 4 0 0 0 4-4V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2-2H6Zm12 4v4a2 2 0 0 0 2-2V4h-2ZM4 4H2v2a2 2 0 0 0 2 2V4Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default TrophyFilled;
