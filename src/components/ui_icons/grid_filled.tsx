import * as React from "react";
import { SVGProps } from "react";

const GridFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm14-1h3a1 1 0 0 1 1 1v3h-4V2Zm-2 0H8v4h4V2ZM6 2H3a1 1 0 0 0-1 1v3h4V2ZM2 8v4h4V8H2Zm0 6v3a1 1 0 0 0 1 1h3v-4H2Zm6 4h4v-4H8v4Zm6 0h3a1 1 0 0 0 1-1v-3h-4v4Zm4-6V8h-4v4h4Zm-6-4v4H8V8h4Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default GridFilled;
