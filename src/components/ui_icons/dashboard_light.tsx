import * as React from "react";
import { SVGProps } from "react";

const DashboardLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 2a8 8 0 0 0-5.651 13.662 1 1 0 0 1-1.413 1.416A9.972 9.972 0 0 1 0 10C0 4.477 4.477 0 10 0s10 4.477 10 10a9.972 9.972 0 0 1-2.929 7.071 1 1 0 0 1-1.414-1.414A8 8 0 0 0 10 2Z" />
      <path d="M14.707 6.707a1 1 0 0 0-1.414-1.414l-2 2a3 3 0 1 0 1.414 1.414l2-2ZM9 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
    </g>
  </svg>
);

export default DashboardLight;
