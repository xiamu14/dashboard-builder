import * as React from "react";
import { SVGProps } from "react";

const StopLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10Zm-5.094 6.32A8 8 0 0 1 3.68 5.094L14.905 16.32Zm1.414-1.414L5.094 3.68A8 8 0 0 1 16.32 14.905Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default StopLight;
