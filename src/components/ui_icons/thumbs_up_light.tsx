import * as React from "react";
import { SVGProps } from "react";

const ThumbsUpLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.027 7.671A2 2 0 0 0 13 10l4.16.002a1 1 0 0 1 .969 1.242l-1.5 5.999a1 1 0 0 1-.97.757H6v-7.298l2.904-3.63A5 5 0 0 0 10 3.947V2.793a2.488 2.488 0 0 1 1.397 2.66l-.37 2.218ZM4.8 9l2.543-3.178A3 3 0 0 0 8 3.948V2.49C8 1.265 9.2.4 10.363.787a4.487 4.487 0 0 1 3.007 4.995L13 8l4.16.002a3 3 0 0 1 2.908 3.728l-1.5 5.998A3 3 0 0 1 15.658 20H3a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h1.8ZM4 11H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1v-7Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ThumbsUpLight;
