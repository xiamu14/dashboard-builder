import * as React from "react";
import { SVGProps } from "react";

const CartLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M0 1a1 1 0 0 1 1-1h.438a3 3 0 0 1 2.91 2.272L4.532 3h11.976a3 3 0 0 1 2.928 3.65l-1.11 5a3 3 0 0 1-2.93 2.35H7.563a3 3 0 0 1-2.91-2.272l-2.243-8.97A1 1 0 0 0 1.439 2H1a1 1 0 0 1-1-1Zm5.03 4 1.561 6.242a1 1 0 0 0 .97.758h7.835a1 1 0 0 0 .976-.783l1.111-5A1 1 0 0 0 16.507 5H5.03ZM7.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </g>
  </svg>
);

export default CartLight;
