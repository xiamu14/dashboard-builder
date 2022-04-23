import * as React from "react";
import { SVGProps } from "react";

const HideFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M5.501 4.085C2.985 5.384 1.393 7.547.601 8.867a2.186 2.186 0 0 0 0 2.266C1.792 13.115 4.786 17 10.002 17c2.612 0 4.667-.975 6.217-2.197l-3.51-3.51a3 3 0 1 1-4-4.001L5.5 4.085ZM17.682 13.438a14.4 14.4 0 0 0 1.716-2.305 2.186 2.186 0 0 0 0-2.266C18.21 6.885 15.215 3 10 3c-.88 0-1.696.11-2.452.304l10.134 10.134Z" />
      </g>
      <path d="M.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default HideFilled;
