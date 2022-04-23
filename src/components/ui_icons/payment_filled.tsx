import * as React from "react";
import { SVGProps } from "react";

const PaymentFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M1 6a1 1 0 0 0-1 1v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a1 1 0 0 0-1-1H1Zm2 4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H3Z" />
      <path
        d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3 1 1 0 0 1-1 1H1a1 1 0 0 1-1-1Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default PaymentFilled;
