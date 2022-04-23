import * as React from "react";
import { SVGProps } from "react";

const UmbrellaFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 0a1 1 0 0 1 1 1v1.05A10.003 10.003 0 0 1 19.95 11c.055.55-.398.999-.95.999h-8v6a3 3 0 1 1-6 0v-1a1 1 0 1 1 2 0v1a1 1 0 1 0 2 0v-6H1c-.552 0-1.005-.449-.95-.999A10.003 10.003 0 0 1 9 2.05V1a1 1 0 0 1 1-1Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default UmbrellaFilled;
