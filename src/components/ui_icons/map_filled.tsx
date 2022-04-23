import * as React from "react";
import { SVGProps } from "react";

const MapFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M13 2.468a1 1 0 0 0-.767-.972L7.617.388A.5.5 0 0 0 7 .874v14.658a1 1 0 0 0 .767.972l4.616 1.108a.5.5 0 0 0 .617-.486V2.468ZM15.695 1.378A1 1 0 0 0 15 2.33v14.665a.5.5 0 0 0 .652.476l2.262-.724A3 3 0 0 0 20 13.89V2.74A2 2 0 0 0 17.39.835l-1.695.543ZM2.086 1.253 4.348.529A.5.5 0 0 1 5 1.005V15.67a1 1 0 0 1-.695.953l-1.695.542A2 2 0 0 1 0 15.26V4.11a3 3 0 0 1 2.086-2.857Z" />
    </g>
  </svg>
);

export default MapFilled;
