import * as React from "react";
import { SVGProps } from "react";

const HeadphoneFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 10a8 8 0 1 1 16 0h-2a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-6c0-5.523-4.477-10-10-10S0 4.477 0 10v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H2Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default HeadphoneFilled;
