import * as React from "react";
import { SVGProps } from "react";

const ShieldCheckFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.051 2.816A3 3 0 0 0 0 5.662V11c0 5.502 5.56 8.842 7.94 10.02a2.377 2.377 0 0 0 2.12 0C12.44 19.841 18 16.501 18 11V5.662a3 3 0 0 0-2.051-2.846l-6-2a3 3 0 0 0-1.898 0l-6 2Zm10.656 6.891a1 1 0 0 0-1.414-1.414L8 11.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l1.434 1.434a1.8 1.8 0 0 0 2.546 0l3.434-3.434Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ShieldCheckFilled;
