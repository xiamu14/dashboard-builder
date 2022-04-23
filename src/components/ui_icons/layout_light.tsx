import * as React from "react";
import { SVGProps } from "react";

const LayoutLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 18a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3ZM15 2H3a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1Zm-5 4H2v9a1 1 0 0 0 1 1h7V6Zm2 10V6h4v9a1 1 0 0 1-1 1h-3Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default LayoutLight;
