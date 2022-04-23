import * as React from "react";
import { SVGProps } from "react";

const ChevronForwardFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 9 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path id="prefix__a" d="M0 0h24v24H0z" />
    </defs>
    <g transform="translate(-7 -4)" fill="none" fillRule="evenodd">
      <mask id="prefix__b" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <g mask="url(#prefix__b)" fill={props.color || "#6F767E"}>
        <path d="M8.043 19.207a1 1 0 0 1 0-1.414L13.836 12 8.043 6.207a1 1 0 1 1 1.414-1.414l5.793 5.793a2 2 0 0 1 0 2.828l-5.793 5.793a1 1 0 0 1-1.414 0Z" />
      </g>
    </g>
  </svg>
);

export default ChevronForwardFilled;
