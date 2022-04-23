import * as React from "react";
import { SVGProps } from "react";

const ShieldFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 5.595c0-1.315.826-2.484 2.051-2.9l6-2.038a2.947 2.947 0 0 1 1.898 0l6 2.038C17.174 3.111 18 4.28 18 5.595v5.44c0 5.607-5.56 9.01-7.94 10.21-.673.34-1.447.34-2.12 0C5.56 20.046 0 16.643 0 11.036v-5.44Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ShieldFilled;
