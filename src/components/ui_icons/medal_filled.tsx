import * as React from "react";
import { SVGProps } from "react";

const MedalFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M13 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fillRule="nonzero" />
      <path d="m5.243 7.865-4.206-6.31A1 1 0 0 1 1.869 0h4.06a2 2 0 0 1 1.665.89L10 4.5 12.406.89A2 2 0 0 1 14.07 0h4.062a1 1 0 0 1 .832 1.555l-4.207 6.31a7 7 0 1 1-9.514 0ZM10 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    </g>
  </svg>
);

export default MedalFilled;
