import * as React from "react";
import { SVGProps } from "react";

const KeyLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      stroke={props.color || "#6F767E"}
      strokeWidth={2}
      fill="none"
      fillRule="evenodd"
    >
      <path d="M14 1c1.38 0 2.63.56 3.536 1.464A4.984 4.984 0 0 1 19 6c0 1.38-.56 2.63-1.464 3.536A5.002 5.002 0 0 1 9.416 8H3.414l-2-2 1.999-2h6.003A5.002 5.002 0 0 1 14 1Z" />
      <path d="M14 5a.997.997 0 0 1 1 1 .997.997 0 0 1-1 1 .997.997 0 0 1-1-1 .997.997 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default KeyLight;
