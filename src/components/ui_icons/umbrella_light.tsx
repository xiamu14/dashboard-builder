import * as React from "react";
import { SVGProps } from "react";

const UmbrellaLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 1a1 1 0 1 0-2 0v1.05A10.003 10.003 0 0 0 .05 11c-.055.55.398.999.95.999h8v6a1 1 0 1 1-2 0v-1a1 1 0 1 0-2 0v1a3 3 0 1 0 6 0v-6h8c.552 0 1.005-.449.95-.999A10.003 10.003 0 0 0 11 2.05V1Zm6.748 9a8.004 8.004 0 0 0-15.496 0h15.496Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default UmbrellaLight;
