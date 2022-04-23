import * as React from "react";
import { SVGProps } from "react";

const MedalLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="m5.243 7.865-4.207-6.31A1 1 0 0 1 1.87 0h4.06a2 2 0 0 1 1.665.89L10 4.5 12.406.89A2 2 0 0 1 14.07 0h4.062a1 1 0 0 1 .832 1.555l-4.207 6.31a7 7 0 1 1-9.514 0Zm3.436-1.74L5.93 2H3.738l3.152 4.728a6.95 6.95 0 0 1 1.79-.604Zm4.432.603L16.263 2H14.07l-2.75 4.124a6.95 6.95 0 0 1 1.791.604ZM15 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
      <path d="M10 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </g>
  </svg>
);

export default MedalLight;
