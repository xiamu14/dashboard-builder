import * as React from "react";
import { SVGProps } from "react";

const WalletFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3.001 3.001 0 0 0-2-2.83V3a3 3 0 0 0-3-3H3Zm0 2a1 1 0 0 0 0 2h13V3a1 1 0 0 0-1-1H3Zm12 8a2 2 0 1 0 0 4h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default WalletFilled;
