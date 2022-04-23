import * as React from "react";
import { SVGProps } from "react";

const TargetFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.782 1.48a1 1 0 0 0-1.697-.566l-1.302 1.302A9.955 9.955 0 0 0 10 1C4.477 1 0 5.477 0 11s4.477 10 10 10 10-4.477 10-10c0-1.733-.44-3.363-1.216-4.784l1.302-1.302a1 1 0 0 0-.566-1.697L18 3l-.218-1.52Zm-2.545 5.697 1.768.252a1 1 0 0 0 .16.01 8 8 0 1 1-3.605-3.605 1 1 0 0 0 .01.16l.253 1.769-.347.346a6 6 0 1 0 1.414 1.414l.347-.346ZM10 7c.742 0 1.437.202 2.032.554l-1.514 1.514A2.002 2.002 0 0 0 8 11a2 2 0 1 0 3.932-.518l1.514-1.514A4 4 0 1 1 10 7Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default TargetFilled;
