import * as React from "react";
import { SVGProps } from "react";

const ShuffleLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M17.207.793a1 1 0 1 0-1.414 1.414l.789.79h-2.874a5 5 0 0 0-4.642 3.142L7.077 11.11a3 3 0 0 1-2.785 1.886H1a1 1 0 1 0 0 2h3.292a5 5 0 0 0 4.642-3.143l1.989-4.971a3 3 0 0 1 2.785-1.886h2.879l-.794.794a1 1 0 0 0 1.414 1.414l2.145-2.145a1.5 1.5 0 0 0 0-2.121L17.207.793Z" />
      <path d="M10.923 11.118a3 3 0 0 0 2.785 1.886h2.879l-.794-.794a1 1 0 0 1 1.414-1.414l2.145 2.145a1.5 1.5 0 0 1 0 2.121l-2.145 2.145a1 1 0 0 1-1.414-1.414l.789-.79h-2.874a5 5 0 0 1-4.642-3.142L7.077 6.89a3 3 0 0 0-2.785-1.886H1a1 1 0 1 1 0-2h3.292a5 5 0 0 1 4.642 3.143l1.989 4.971Z" />
    </g>
  </svg>
);

export default ShuffleLight;
