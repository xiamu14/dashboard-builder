import * as React from "react";
import { SVGProps } from "react";

const SmartWatchLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 13 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="m1.565 4.365.427-1.994A3 3 0 0 1 4.925 0h2.15a3 3 0 0 1 2.933 2.371l.427 1.994A3 3 0 0 1 12 7v1.085A1.5 1.5 0 0 1 13 9.5v1a1.5 1.5 0 0 1-1 1.415V13a3 3 0 0 1-1.565 2.635l-.427 1.994A3 3 0 0 1 7.075 20h-2.15a3 3 0 0 1-2.933-2.371l-.427-1.994A3 3 0 0 1 0 13V7a3 3 0 0 1 1.565-2.635ZM4.925 2h2.15a1 1 0 0 1 .978.79L8.312 4H3.688l.26-1.21A1 1 0 0 1 4.924 2ZM3.688 16l.26 1.21a1 1 0 0 0 .977.79h2.15a1 1 0 0 0 .978-.79L8.312 16H3.688ZM3 6h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
      <path d="M4 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </g>
  </svg>
);

export default SmartWatchLight;
