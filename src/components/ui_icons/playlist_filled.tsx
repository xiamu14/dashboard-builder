import * as React from "react";
import { SVGProps } from "react";

const PlaylistFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M14.272 1.432A3 3 0 0 0 12 4.342v7.193A4 4 0 1 0 14 15V7.89a.5.5 0 0 1 .379-.485l3.349-.837A3 3 0 0 0 20 3.658v-.456A2.5 2.5 0 0 0 16.894.777l-2.622.655Z"
        fillRule="nonzero"
      />
      <path d="M0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 12a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default PlaylistFilled;
