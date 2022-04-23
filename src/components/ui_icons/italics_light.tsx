import * as React from "react";
import { SVGProps } from "react";

const ItalicsLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.021 0H10.5a1 1 0 1 1 0 2H8.78l-3.5 14H7a1 1 0 0 1 0 2H1.5a1 1 0 1 1 0-2h1.72l3.5-14H5a1 1 0 0 1 0-2h3.021Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default ItalicsLight;
