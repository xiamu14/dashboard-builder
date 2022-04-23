import * as React from "react";
import { SVGProps } from "react";

const FlashlightLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M4.11 9.336A2 2 0 0 1 5 11v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a2 2 0 0 1 .89-1.664l1.665-1.11A1 1 0 0 0 14 7.394V7H2v.394a1 1 0 0 0 .445.832l1.664 1.11ZM3 11 1.336 9.89A3 3 0 0 1 0 7.395V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1.394a3 3 0 0 1-1.336 2.497L13 11v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7Z" />
      <path d="M8 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1ZM8 0a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM3.053 1.106a1 1 0 0 1 1.341.447l.5 1a1 1 0 0 1-1.788.894l-.5-1a1 1 0 0 1 .447-1.341ZM12.947 1.106a1 1 0 0 1 .447 1.341l-.5 1a1 1 0 0 1-1.788-.894l.5-1a1 1 0 0 1 1.341-.447Z" />
    </g>
  </svg>
);

export default FlashlightLight;
