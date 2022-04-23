import * as React from "react";
import { SVGProps } from "react";

const PaintRollerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 1 1 0 0 1 1 1v1.86a1 1 0 0 1-.804.981L9.412 9.198A3 3 0 0 0 7 12.14v.128A2 2 0 0 0 6 14v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-1-1.732v-.128a1 1 0 0 1 .804-.981l6.784-1.357A3 3 0 0 0 19 6.86V5a3 3 0 0 0-3-3h-.17A3.001 3.001 0 0 0 13 0H3Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default PaintRollerFilled;
