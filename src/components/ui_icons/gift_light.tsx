import * as React from "react";
import { SVGProps } from "react";

const GiftLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 2.5 8.811 1.014A2.702 2.702 0 0 0 6.701 0H6.5a2.5 2.5 0 0 0-2.45 3H3a3 3 0 0 0-3 3v1c0 .889.386 1.687 1 2.236V17a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9.236c.614-.55 1-1.348 1-2.236V6a3 3 0 0 0-3-3h-1.05a2.5 2.5 0 0 0-2.45-3h-.202c-.82 0-1.596.373-2.11 1.014L10 2.5Zm2.161.5H13.5a.5.5 0 0 0 0-1h-.202a.701.701 0 0 0-.547.263L12.16 3ZM3 5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6V5H3Zm8 0v3h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-6ZM6 2.5a.5.5 0 0 0 .5.5h1.339l-.59-.737A.702.702 0 0 0 6.702 2H6.5a.5.5 0 0 0-.5.5ZM3 10v7a1 1 0 0 0 1 1h5v-8H3Zm8 8v-8h6v7a1 1 0 0 1-1 1h-5Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default GiftLight;
