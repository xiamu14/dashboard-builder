import * as React from "react";
import { SVGProps } from "react";

const ChevronDoubleDownFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M.793 6.793a1 1 0 0 1 1.414 0L8 12.586l5.793-5.793a1 1 0 1 1 1.414 1.414L9.414 14a2 2 0 0 1-2.828 0L.793 8.207a1 1 0 0 1 0-1.414Z" />
      <path d="M.793.543a1 1 0 0 1 1.414 0L8 6.336 13.793.543a1 1 0 1 1 1.414 1.414L9.414 7.75a2 2 0 0 1-2.828 0L.793 1.957a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default ChevronDoubleDownFilled;
