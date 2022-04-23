import * as React from "react";
import { SVGProps } from "react";

const BulbLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M4 19a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1ZM9 12.745a2 2 0 0 1 .856-1.64 5 5 0 1 0-5.712 0A2 2 0 0 1 5 12.745V14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.255Zm-6 0a7 7 0 1 1 8 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-1.255Z" />
    </g>
  </svg>
);

export default BulbLight;
