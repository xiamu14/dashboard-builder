import * as React from "react";
import { SVGProps } from "react";

const SmartWatchFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 13 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M2.576 1.976A2.5 2.5 0 0 1 5.021 0h1.958a2.5 2.5 0 0 1 2.444 1.976l.463 2.157A3.001 3.001 0 0 1 12 7v1.085A1.5 1.5 0 0 1 13 9.5v1a1.5 1.5 0 0 1-1 1.415V13c0 1.349-.89 2.49-2.114 2.867l-.462 2.157A2.5 2.5 0 0 1 6.979 20H5.021a2.5 2.5 0 0 1-2.445-1.976l-.462-2.157A3.001 3.001 0 0 1 0 13V7c0-1.349.89-2.49 2.114-2.867l.462-2.157ZM10 7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7Z" />
      <path d="M4 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </g>
  </svg>
);

export default SmartWatchFilled;
