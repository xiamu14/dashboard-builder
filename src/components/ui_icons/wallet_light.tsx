import * as React from "react";
import { SVGProps } from "react";

const WalletLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 4.17V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3.001 3.001 0 0 0-2-2.83ZM2 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1H3a1 1 0 0 1-1-1Zm0 2.83c.313.11.65.17 1 .17h14a1 1 0 0 1 1 1v2h-3a3 3 0 1 0 0 6h3v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5.83ZM15 11h3v2h-3a1 1 0 1 1 0-2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default WalletLight;
