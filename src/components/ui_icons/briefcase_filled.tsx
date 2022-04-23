import * as React from "react";
import { SVGProps } from "react";

const BriefcaseFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M6.2 2.259 5.41 4H3a3.001 3.001 0 0 0-3 3v1.5A2.5 2.5 0 0 0 2.5 11h3.67A3.001 3.001 0 0 1 9 9h2c1.306 0 2.418.835 2.83 2h3.67A2.5 2.5 0 0 0 20 8.5V7a3 3 0 0 0-3-3h-2.41l-.79-1.741A3 3 0 0 0 11.067.5H8.932A3 3 0 0 0 6.2 2.259Zm4.868.241H8.932a1 1 0 0 0-.91.586L7.605 4h4.788l-.415-.914a1 1 0 0 0-.91-.586Z" />
      <path
        d="M6.17 13H2.5a4.481 4.481 0 0 1-2.098-.518c-.177-.093-.402.029-.402.228V18a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-5.29c0-.2-.225-.321-.402-.228-.626.33-1.34.518-2.098.518h-3.67A3.001 3.001 0 0 1 11 15H9a3.001 3.001 0 0 1-2.83-2Z"
        fillRule="nonzero"
      />
      <path d="M9 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H9Z" fillRule="nonzero" />
    </g>
  </svg>
);

export default BriefcaseFilled;
