import * as React from "react";
import { SVGProps } from "react";

const TuneLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M3.126 15H1a1 1 0 0 1 0-2h2.126a4.002 4.002 0 0 1 7.748 0H17a1 1 0 1 1 0 2h-6.126a4.002 4.002 0 0 1-7.748 0ZM5 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM7.126 5H1a1 1 0 0 1 0-2h6.126a4.002 4.002 0 0 1 7.748 0H17a1 1 0 1 1 0 2h-2.126a4.002 4.002 0 0 1-7.748 0ZM9 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
    </g>
  </svg>
);

export default TuneLight;
