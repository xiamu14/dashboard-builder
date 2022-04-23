import * as React from "react";
import { SVGProps } from "react";

const ColorPaletteFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.787 12C18.958 12 20 11.171 20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10c1.171 0 2-1.042 2-2.213V16a4 4 0 0 1 4-4h1.787ZM11 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ColorPaletteFilled;
