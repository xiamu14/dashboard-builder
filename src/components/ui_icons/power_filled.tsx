import * as React from "react";
import { SVGProps } from "react";

const PowerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M12.632 2.871c.25-.492.856-.691 1.317-.388a9 9 0 1 1-9.898 0c.46-.303 1.066-.104 1.317.388.25.492.05 1.088-.402 1.406a7.002 7.002 0 1 0 8.068 0c-.451-.318-.652-.914-.402-1.406Z"
        fillRule="nonzero"
      />
      <path d="M9 0a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default PowerFilled;
