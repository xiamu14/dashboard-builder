import * as React from "react";
import { SVGProps } from "react";

const WatchFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M2.992 2.371A3 3 0 0 1 5.925 0h2.15a3 3 0 0 1 2.933 2.371l.485 2.26a7.006 7.006 0 0 1 2.222 3.384A1.5 1.5 0 0 1 15 9.5v1a1.5 1.5 0 0 1-1.285 1.485 7.006 7.006 0 0 1-2.222 3.383l-.485 2.26A3 3 0 0 1 8.075 20h-2.15a3 3 0 0 1-2.933-2.371l-.484-2.26A6.985 6.985 0 0 1 0 10c0-2.156.975-4.084 2.508-5.369l.484-2.26ZM12 10a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z" />
      <path d="M7 6a1 1 0 0 1 1 1v2.586l1.207 1.207a1 1 0 0 1-1.414 1.414l-1.354-1.353A1.5 1.5 0 0 1 6 9.793V7a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default WatchFilled;
