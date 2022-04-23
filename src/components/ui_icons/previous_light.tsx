import * as React from "react";
import { SVGProps } from "react";

const PreviousLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M14.493 13.617 6.41 8.862a1 1 0 0 1 0-1.724l8.083-4.755A1 1 0 0 1 16 3.245v9.51a1 1 0 0 1-1.507.862Zm-9.097-3.031c-1.972-1.16-1.972-4.012 0-5.172L13.479.66c2-1.176 4.52.266 4.52 2.586v9.51c0 2.32-2.52 3.762-4.52 2.586l-8.083-4.755ZM1 0a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z" />
    </g>
  </svg>
);

export default PreviousLight;
