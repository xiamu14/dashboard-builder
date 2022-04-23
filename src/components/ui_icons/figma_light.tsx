import * as React from "react";
import { SVGProps } from "react";

const FigmaLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 2H4a2 2 0 1 0 0 4h2V2Zm2 0v4h2a2 2 0 1 0 0-4H8ZM4 14h2v2a2 2 0 1 1-2-2Zm-4-4a3.99 3.99 0 0 0 1.354 3A4 4 0 1 0 8 16v-2.535A4 4 0 0 0 12.646 7 4 4 0 0 0 10 0H4a4 4 0 0 0-2.646 7A3.99 3.99 0 0 0 0 10Zm6 2H4a2 2 0 1 1 0-4h2v4Zm2-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FigmaLight;
