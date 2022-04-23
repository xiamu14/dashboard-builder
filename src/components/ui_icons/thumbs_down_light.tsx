import * as React from "react";
import { SVGProps } from "react";

const ThumbsDownLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4.8 11 2.543 3.178A3 3 0 0 1 8 16.052v1.458c0 1.225 1.2 2.09 2.363 1.702a4.487 4.487 0 0 0 3.007-4.994L13 12l4.16-.002a3 3 0 0 0 2.908-3.728l-1.5-5.998A3 3 0 0 0 15.658 0H3a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h1.8Zm6.227 1.329A2 2 0 0 1 13 10l4.16-.002a1 1 0 0 0 .969-1.242l-1.5-5.999a1 1 0 0 0-.97-.757H6v7.298l2.904 3.63A5 5 0 0 1 10 16.053v1.155a2.488 2.488 0 0 0 1.397-2.66l-.37-2.218ZM4 9V2H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ThumbsDownLight;
