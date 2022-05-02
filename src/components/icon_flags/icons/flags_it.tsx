import * as React from "react";
import { SVGProps } from "react";

const FlagsIt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#009246" d="M0 0h213.3v480H0z" />
      <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
    </g>
  </svg>
);

export default FlagsIt;
