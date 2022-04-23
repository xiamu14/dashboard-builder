import * as React from "react";
import { SVGProps } from "react";

const PrinterFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 2.5V5H3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2v.5A2.5 2.5 0 0 0 7.5 20h5a2.5 2.5 0 0 0 2.5-2.5V17h2a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-2V2.5A2.5 2.5 0 0 0 12.5 0h-5A2.5 2.5 0 0 0 5 2.5Zm7.5-.5h-5a.5.5 0 0 0-.5.5V5h6V2.5a.5.5 0 0 0-.5-.5Zm-5 12h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5ZM18 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default PrinterFilled;
