import * as React from "react";
import { SVGProps } from "react";

const CartFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M7.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path
        d="M1 0a1 1 0 1 0 0 2h.438a1 1 0 0 1 .97.757l2.243 8.97A3 3 0 0 0 7.561 14h7.835a3 3 0 0 0 2.928-2.35l1.111-5A3 3 0 0 0 16.507 3H4.53l-.182-.728A3 3 0 0 0 1.439 0H1Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default CartFilled;
