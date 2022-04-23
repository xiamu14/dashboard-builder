import * as React from "react";
import { SVGProps } from "react";

const CloudFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 7a7 7 0 0 1-7 7H5a5 5 0 1 1 1.561-9.751A7.002 7.002 0 0 1 20 7Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default CloudFilled;
