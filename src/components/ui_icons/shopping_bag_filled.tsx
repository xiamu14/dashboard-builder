import * as React from "react";
import { SVGProps } from "react";

const ShoppingBagFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 0a4 4 0 0 0-4 4H4.648a3 3 0 0 0-2.976 2.628l-1.25 10A3 3 0 0 0 3.398 20h13.204a3 3 0 0 0 2.977-3.372l-1.25-10A3 3 0 0 0 15.352 4H14a4 4 0 0 0-4-4Zm2 4a2 2 0 0 0-4 0h4Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ShoppingBagFilled;
