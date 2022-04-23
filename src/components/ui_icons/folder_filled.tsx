import * as React from "react";
import { SVGProps } from "react";

const FolderFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 18h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H9.414a1 1 0 0 1-.707-.293L7.88.88A3 3 0 0 0 5.757 0H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default FolderFilled;
