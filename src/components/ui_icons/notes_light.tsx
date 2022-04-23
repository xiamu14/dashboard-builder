import * as React from "react";
import { SVGProps } from "react";

const NotesLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M17 6H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM7 4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Z" />
      <path d="M3 2h10a1 1 0 0 1 1 1v1h2V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1V8H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path
        d="M9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default NotesLight;
