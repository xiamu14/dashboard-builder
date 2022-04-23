import * as React from "react";
import { SVGProps } from "react";

const DollarLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 0a1 1 0 0 1 1 1v1h2a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v.117a3 3 0 0 0 2.051 2.846l6.53 2.177A5 5 0 0 1 14 15.883V16a4 4 0 0 1-4 4H8v1a1 1 0 1 1-2 0v-1H4a4 4 0 0 1-4-4v-1a1 1 0 1 1 2 0v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.117a3 3 0 0 0-2.051-2.846l-6.53-2.177A5 5 0 0 1 0 6.117V6a4 4 0 0 1 4-4h2V1a1 1 0 0 1 1-1Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default DollarLight;
