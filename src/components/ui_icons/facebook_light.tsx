import * as React from "react";
import { SVGProps } from "react";

const FacebookLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 10 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 4a2 2 0 0 1 2-2h1a1 1 0 0 0 0-2H8a4 4 0 0 0-4 4v2H1.5a1 1 0 0 0 0 2H4v9a1 1 0 1 0 2 0V8h2.5a1 1 0 0 0 0-2H6V4Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FacebookLight;
