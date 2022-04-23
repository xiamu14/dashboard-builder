import * as React from "react";
import { SVGProps } from "react";

const FuelFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 0a3 3 0 0 0-3 3v15H1a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-1v-6a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 5 0V6.414A2 2 0 0 0 19.414 5l-1.707-1.707a1 1 0 1 0-1.414 1.414l.707.707v1.172A2 2 0 0 0 17.586 8l.414.414V14.5a.5.5 0 0 1-1 0V13a3 3 0 0 0-3-3V3a3 3 0 0 0-3-3H5Zm0 2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FuelFilled;
