import * as React from "react";
import { SVGProps } from "react";

const PuzzleLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 3a3 3 0 0 1 6 0h3a2 2 0 0 1 2 2v4.268a1 1 0 0 1-1.5.865 1 1 0 1 0 0 1.734 1 1 0 0 1 1.5.865V17a2 2 0 0 1-2 2h-4.268a1 1 0 0 1-.865-1.5 1 1 0 1 0-1.734 0 1 1 0 0 1-.865 1.5H5a2 2 0 0 1-2-2v-3a3 3 0 1 1 0-6V5a2 2 0 0 1 2-2h3Zm3-1a1 1 0 0 0-.867 1.5A1 1 0 0 1 9.268 5H5v4.268a1 1 0 0 1-1.5.865 1 1 0 1 0 0 1.734 1 1 0 0 1 1.5.865V17h3a3 3 0 1 1 6 0h3v-3a3 3 0 1 1 0-6V5h-4.268a1 1 0 0 1-.865-1.5A1 1 0 0 0 11 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default PuzzleLight;
