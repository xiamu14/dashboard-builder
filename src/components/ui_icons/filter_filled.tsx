import * as React from "react";
import { SVGProps } from "react";

const FilterFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 0H2a2 2 0 0 0-2 2v1.948a2 2 0 0 0 .867 1.648L8 10.5v7.841a1 1 0 0 0 1.467.885l2-1.056a1 1 0 0 0 .533-.884V10.5l7.133-4.904A2 2 0 0 0 20 3.948V2a2 2 0 0 0-2-2Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default FilterFilled;
