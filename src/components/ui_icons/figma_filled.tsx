import * as React from "react";
import { SVGProps } from "react";

const FigmaFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 4a3.99 3.99 0 0 0 1.354 3A3.99 3.99 0 0 0 0 10a3.99 3.99 0 0 0 1.354 3A4 4 0 1 0 8 16v-2.535A4 4 0 0 0 12.646 7 4 4 0 0 0 10 0H4a4 4 0 0 0-4 4Zm7-2H4a2 2 0 1 0 0 4h3V2ZM6 14H4a2 2 0 1 0 2 2v-2Zm4-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FigmaFilled;
