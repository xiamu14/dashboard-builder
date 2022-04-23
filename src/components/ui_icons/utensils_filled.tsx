import * as React from "react";
import { SVGProps } from "react";

const UtensilsFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M16 18a1 1 0 1 1-2 0v-6h-3a1 1 0 0 1-1-1V5a5 5 0 0 1 5-5 1 1 0 0 1 1 1v17ZM2 1a1 1 0 0 0-2 0v5a4.002 4.002 0 0 0 3 3.874V18a1 1 0 1 0 2 0V9.874C6.725 9.43 8 7.864 8 6V1a1 1 0 0 0-2 0v4H5V1a1 1 0 0 0-2 0v4H2V1Z" />
    </g>
  </svg>
);

export default UtensilsFilled;
