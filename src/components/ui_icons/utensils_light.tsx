import * as React from "react";
import { SVGProps } from "react";

const UtensilsLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M16 1a1 1 0 0 0-1-1 5 5 0 0 0-5 5v6a1 1 0 0 0 1 1h3v5a1 1 0 1 0 2 0V1Zm-4 9h2V2.17A3.001 3.001 0 0 0 12 5v5ZM2 1a1 1 0 0 0-2 0v5a4.002 4.002 0 0 0 3 3.874V17a1 1 0 1 0 2 0V9.874C6.725 9.43 8 7.864 8 6V1a1 1 0 0 0-2 0v3H5V1a1 1 0 0 0-2 0v3H2V1Zm0 5a2 2 0 1 0 4 0H2Z" />
    </g>
  </svg>
);

export default UtensilsLight;
