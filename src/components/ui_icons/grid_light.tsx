import * as React from "react";
import { SVGProps } from "react";

const GridLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Zm9 2H8v4h4V2Zm2 0v4h4V3a1 1 0 0 0-1-1h-3Zm-2 6H8v4h4V8Zm2 4V8h4v4h-4Zm-2 2H8v4h4v-4Zm2 4v-4h4v3a1 1 0 0 1-1 1h-3ZM3 2h3v4H2V3a1 1 0 0 1 1-1ZM2 8h4v4H2V8Zm0 6h4v4H3a1 1 0 0 1-1-1v-3Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default GridLight;
