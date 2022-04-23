import * as React from "react";
import { SVGProps } from "react";

const CheckboxLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M15 2H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" />
      <path d="M13.707 5.293a1 1 0 0 1 0 1.414L8.414 12a2 2 0 0 1-2.828 0l-1.793-1.793a1 1 0 0 1 1.414-1.414L7 10.586l5.293-5.293a1 1 0 0 1 1.414 0Z" />
    </g>
  </svg>
);

export default CheckboxLight;
