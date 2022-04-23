import * as React from "react";
import { SVGProps } from "react";

const LogoFb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.032 22 4 12H0V8h4V5.5C4 1.789 6.298 0 9.61 0c1.585 0 2.948.118 3.345.17v3.88H10.66c-1.8 0-2.15.856-2.15 2.112V8h5.241l-2 4H8.51v10H4.032Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default LogoFb;
