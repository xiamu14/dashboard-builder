import * as React from "react";
import { SVGProps } from "react";

const CheckAllFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 11"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M9.243 5.757a1 1 0 0 0 1.414 0l4.05-4.05A1 1 0 0 0 13.293.293l-4.05 4.05a1 1 0 0 0 0 1.414ZM5.626 10.106c.337-.072.412-.483.168-.727L4.305 7.891a.988.988 0 0 1-.012-.012L1.707 5.293A1 1 0 0 0 .293 6.707l2.586 2.586a2.998 2.998 0 0 0 2.747.813Z" />
      </g>
      <path d="M19.707.243a1 1 0 0 1 0 1.414l-7.636 7.636a3 3 0 0 1-4.242 0L5.243 6.707a1 1 0 1 1 1.414-1.414l2.586 2.586a1 1 0 0 0 1.414 0L18.293.243a1 1 0 0 1 1.414 0Z" />
    </g>
  </svg>
);

export default CheckAllFilled;
