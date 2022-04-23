import * as React from "react";
import { SVGProps } from "react";

const ArrowUpLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.207 8.707A1 1 0 1 1 .793 7.293L6.586 1.5a2 2 0 0 1 2.828 0l5.793 5.793a1 1 0 0 1-1.414 1.414L9 3.914V18a1 1 0 1 1-2 0V3.914L2.207 8.707Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default ArrowUpLight;
