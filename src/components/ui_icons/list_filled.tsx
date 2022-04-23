import * as React from "react";
import { SVGProps } from "react";

const ListFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M4 1a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM4 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM4 11a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
      <path
        d="M2 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default ListFilled;
