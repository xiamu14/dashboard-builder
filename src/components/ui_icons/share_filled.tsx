import * as React from "react";
import { SVGProps } from "react";

const ShareFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 3a3 3 0 0 1-4.91 2.313L5.94 8.402a3.014 3.014 0 0 1 0 1.196l5.15 3.09a3 3 0 1 1-1.03 1.715l-5.149-3.09a3 3 0 1 1 0-4.625l5.149-3.09A3 3 0 1 1 16 3Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default ShareFilled;
