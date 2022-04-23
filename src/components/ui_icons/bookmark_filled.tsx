import * as React from "react";
import { SVGProps } from "react";

const BookmarkFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v14c0 2.06 2.352 3.236 4 2l3.7-2.775a.5.5 0 0 1 .6 0L12 19c1.648 1.236 4 .06 4-2V3a3 3 0 0 0-3-3H3Zm2 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default BookmarkFilled;
