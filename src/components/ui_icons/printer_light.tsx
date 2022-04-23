import * as React from "react";
import { SVGProps } from "react";

const PrinterLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M5 3v2H3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3h2a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-2V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3Zm10 12h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v-1a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2v1Zm-2-1H7v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3ZM12 2H8a1 1 0 0 0-1 1v2h6V3a1 1 0 0 0-1-1Z" />
      <path d="M16 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </g>
  </svg>
);

export default PrinterLight;
