import * as React from "react";
import { SVGProps } from "react";

const BookmarkLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M6.8 14.4a2 2 0 0 1 2.4 0l3.2 2.4A1 1 0 0 0 14 16V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1.6.8l3.2-2.4ZM8 16l3.2 2.4c1.978 1.483 4.8.072 4.8-2.4V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v13c0 2.472 2.822 3.883 4.8 2.4L8 16Z" />
      <path d="M4 5a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default BookmarkLight;
