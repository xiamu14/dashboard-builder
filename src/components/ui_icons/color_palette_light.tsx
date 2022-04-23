import * as React from "react";
import { SVGProps } from "react";

const ColorPaletteLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M11.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fillRule="nonzero"
      />
      <path d="M18 9.945A8 8 0 1 0 9.945 18a.449.449 0 0 0 .055-.213V16a6 6 0 0 1 6-6h1.787A.449.449 0 0 0 18 9.945ZM20 10c0 1.171-1.042 2-2.213 2H16a4 4 0 0 0-4 4v1.787C12 18.958 11.171 20 10 20 4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10Z" />
    </g>
  </svg>
);

export default ColorPaletteLight;
