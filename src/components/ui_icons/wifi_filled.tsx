import * as React from "react";
import { SVGProps } from "react";

const WifiFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M13 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fillRule="nonzero" />
      <path d="M11 10c-1.383 0-2.634.56-3.54 1.469a1 1 0 1 1-1.416-1.412A6.981 6.981 0 0 1 11 8c1.936 0 3.69.787 4.956 2.057a1 1 0 0 1-1.416 1.412A4.981 4.981 0 0 0 11 10Z" />
      <path d="M11 6a8.969 8.969 0 0 0-6.36 2.632 1 1 0 1 1-1.413-1.416A10.969 10.969 0 0 1 11 4c3.035 0 5.784 1.23 7.773 3.216a1 1 0 1 1-1.413 1.416A8.969 8.969 0 0 0 11 6Z" />
      <path d="M11 2C7.41 2 4.16 3.454 1.807 5.808A1 1 0 1 1 .392 4.394 14.956 14.956 0 0 1 11 0c4.142 0 7.894 1.68 10.608 4.394a1 1 0 1 1-1.415 1.414A12.956 12.956 0 0 0 11 2Z" />
    </g>
  </svg>
);

export default WifiFilled;
