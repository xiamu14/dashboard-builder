import * as React from "react";
import { SVGProps } from "react";

const FuelLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 18V3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v7a3 3 0 0 1 3 3v1.5a.5.5 0 0 0 1 0V8.414L17.586 8A2 2 0 0 1 17 6.586V5.414l-.707-.707a1 1 0 0 1 1.414-1.414L19.414 5A2 2 0 0 1 20 6.414V14.5a2.5 2.5 0 0 1-5 0V13a1 1 0 0 0-1-1v6h1a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h1ZM5 2h6a1 1 0 0 1 1 1v4H4V3a1 1 0 0 1 1-1ZM4 9v9h8V9H4Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FuelLight;
