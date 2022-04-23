import * as React from "react";
import { SVGProps } from "react";

const RemoveLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 2"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 1a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default RemoveLight;
