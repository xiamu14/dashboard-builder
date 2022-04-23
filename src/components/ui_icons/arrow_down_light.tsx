import * as React from "react";
import { SVGProps } from "react";

const ArrowDownLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 1a1 1 0 1 0-2 0v14.086l-4.793-4.793a1 1 0 1 0-1.414 1.414L6.586 17.5a2 2 0 0 0 2.828 0l5.793-5.793a1 1 0 0 0-1.414-1.414L9 15.086V1Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default ArrowDownLight;
