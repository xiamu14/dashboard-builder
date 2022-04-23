import * as React from "react";
import { SVGProps } from "react";

const PlayLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m3.507 13.617 8.083-4.755a1 1 0 0 0 0-1.724L3.507 2.383A1 1 0 0 0 2 3.245v9.51a1 1 0 0 0 1.507.862Zm9.097-3.031c1.972-1.16 1.972-4.012 0-5.172L4.521.66C2.521-.517 0 .925 0 3.245v9.51c0 2.32 2.521 3.762 4.521 2.586l8.083-4.755Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default PlayLight;
