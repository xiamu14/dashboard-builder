import * as React from "react";
import { SVGProps } from "react";

const LocationFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.035 8.035a8 8 0 0 1-1.763 5.021h.005c-1.862 2.492-3.513 4.62-4.956 6.383a1.695 1.695 0 0 1-2.642 0c-1.438-1.76-3.086-3.885-4.945-6.374l-.007-.008a8.035 8.035 0 1 1 14.307-5.022ZM12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default LocationFilled;
