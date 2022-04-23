import * as React from "react";
import { SVGProps } from "react";

const CheckCircledFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 20c5.523 0 10-4.477 10-10a9.957 9.957 0 0 0-1.118-4.598.477.477 0 0 0-.764-.106L10.414 13a2 2 0 0 1-2.828 0l-2.793-2.793a1 1 0 0 1 1.414-1.414L9 11.586l8.021-8.016a.482.482 0 0 0 .007-.684A9.968 9.968 0 0 0 10 0C4.477 0 0 4.477 0 10s4.477 10 10 10Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default CheckCircledFilled;
