import * as React from "react";
import { SVGProps } from "react";

const FilterLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.236 8.927A2 2 0 0 1 9 10.5v6.676l2-.704V10.5a2 2 0 0 1 .764-1.573l5.854-4.599A1 1 0 0 0 18 3.542V2H2v1.542a1 1 0 0 0 .382.786l5.854 4.6Zm10.617-3.026L13 10.5v6.68a1 1 0 0 1-.668.944l-4 1.407A1 1 0 0 1 7 18.588V10.5L1.147 5.9A3 3 0 0 1 0 3.543V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.542A3 3 0 0 1 18.854 5.9Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FilterLight;
