import * as React from "react";
import { SVGProps } from "react";

const TruckFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 17"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v9c0 1.354.897 2.498 2.129 2.872a3.001 3.001 0 0 0 5.7.128h6.342a3.001 3.001 0 0 0 5.666-.023A2.5 2.5 0 0 0 22 12.5V7.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 18 3h-2a3 3 0 0 0-3-3H3Zm13.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-.667a.5.5 0 0 0-.1-.3L18.15 5.2a.5.5 0 0 0-.4-.2H16.5ZM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default TruckFilled;
