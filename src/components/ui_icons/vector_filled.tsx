import * as React from "react";
import { SVGProps } from "react";

const VectorFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 0a2 2 0 0 0-2 2H3.732a2 2 0 1 0 0 2h1.369A6.979 6.979 0 0 0 3 9v1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2V9c0-1.721.87-3.24 2.194-4.14A2 2 0 0 0 9 6h2a2 2 0 0 0 1.806-1.14A4.995 4.995 0 0 1 15 9v1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2V9a6.98 6.98 0 0 0-2.101-5h1.369A2 2 0 0 0 20 3a2 2 0 0 0-3.732-1H13a2 2 0 0 0-2-2H9Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default VectorFilled;
