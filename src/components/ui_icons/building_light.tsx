import * as React from "react";
import { SVGProps } from "react";

const BuildingLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="m10.758 2.872-6 1.5a1 1 0 0 0-.758.97V18h8V3.842a1 1 0 0 0-1.242-.97ZM14 8v10h2V9a1 1 0 0 0-1-1h-1Zm4 12h1a1 1 0 1 0 0-2h-1V9a3 3 0 0 0-3-3h-1V3.842a3 3 0 0 0-3.728-2.91l-6 1.5A3 3 0 0 0 2 5.342V18H1a1 1 0 0 0 0 2h17Z" />
      <path d="M6 15a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1ZM6 11a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1ZM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default BuildingLight;
