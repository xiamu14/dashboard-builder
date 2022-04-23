import * as React from "react";
import { SVGProps } from "react";

const BulbFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M4 19a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1ZM10.5 13.64c0-.357.194-.682.487-.886a7 7 0 1 0-7.974 0c.293.204.487.53.487.886V14A2.5 2.5 0 0 0 6 16.5h2a2.5 2.5 0 0 0 2.5-2.5v-.36Z" />
    </g>
  </svg>
);

export default BulbFilled;
