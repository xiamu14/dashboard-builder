import * as React from "react";
import { SVGProps } from "react";

const TrophyLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 2h10v6A5 5 0 0 1 6 8V2ZM4 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4h-.29A7.008 7.008 0 0 1 12 14.93V18h3a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h3v-3.07A7.008 7.008 0 0 1 4.29 10H4a4 4 0 0 1-4-4V4a2 2 0 0 1 2-2h2Zm0 2H2v2a2 2 0 0 0 2 2V4Zm14 0v4a2 2 0 0 0 2-2V4h-2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default TrophyLight;
