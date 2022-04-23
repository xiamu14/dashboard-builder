import * as React from "react";
import { SVGProps } from "react";

const PaymentLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1h14a1 1 0 0 1 1 1v1H2V3a1 1 0 0 1 1-1ZM2 6v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6H2Z" />
      <path d="M4 11a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default PaymentLight;
