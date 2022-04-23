import * as React from "react";
import { SVGProps } from "react";

const FlagLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 1a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0v-6h5.026a6 6 0 0 1 1.898.308l1.152.384a6.001 6.001 0 0 0 1.898.308H15a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-3.026a6 6 0 0 1-1.898-.308l-1.152-.384A6 6 0 0 0 7.026 1H2Zm0 2v8h5.026a8 8 0 0 1 2.53.41l1.153.385c.408.136.835.205 1.265.205H15a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3.026a8 8 0 0 1-2.53-.41L8.29 3.204A4 4 0 0 0 7.026 3H2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FlagLight;
