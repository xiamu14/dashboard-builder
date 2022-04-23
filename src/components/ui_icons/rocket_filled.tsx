import * as React from "react";
import { SVGProps } from "react";

const RocketFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M8.986 20c-.041.19-.12.392-.268.569a1.331 1.331 0 0 1-.584.38c-.458-.088-.7-.2-.852-.38A1.293 1.293 0 0 1 7.014 20Z"
        stroke={props.color || "#6F767E"}
        strokeWidth={2}
      />
      <path
        d="M3 6.165C3.75 3.916 6.186 1.385 7.358.26a.921.921 0 0 1 1.284 0C9.814 1.386 12.25 3.916 13 6.165c.383 1.148.345 2.804.124 4.503A3 3 0 0 1 16 13.666v4.131a1 1 0 0 1-1.555.832l-2.92-1.947a2.905 2.905 0 0 1-2.195.984H6.662c-.86 0-1.657-.367-2.192-.98l-2.915 1.943A1 1 0 0 1 0 17.797v-4.132a3 3 0 0 1 2.866-2.997C2.648 8.977 2.614 7.324 3 6.165Zm5 3.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill={props.color || "#6F767E"}
      />
    </g>
  </svg>
);

export default RocketFilled;
