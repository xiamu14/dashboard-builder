import * as React from "react";
import { SVGProps } from "react";

const TrashLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M8 8a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1ZM12 8a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1Z" />
      <path d="M8 0a3 3 0 0 0-3 3H1a1 1 0 0 0 0 2h1v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5h1a1 1 0 1 0 0-2h-4a3 3 0 0 0-3-3H8Zm5 3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1h6ZM5 5H4v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H5Z" />
    </g>
  </svg>
);

export default TrashLight;
