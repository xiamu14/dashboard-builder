import * as React from "react";
import { SVGProps } from "react";

const HistoryFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M18 10a8 8 0 0 0-8-8 7.846 7.846 0 0 0-6.182 2.993l1.68-.005a1 1 0 1 1 .005 2l-3.443.01a.996.996 0 0 1-.116 0L1.503 7A1 1 0 0 1 .5 6V2a1 1 0 1 1 2 0v1.45A9.83 9.83 0 0 1 10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10c-3.936 0-7.264-2.272-8.896-5.555a1 1 0 1 1 1.792-.89C4.21 16.199 6.869 18 10 18a8 8 0 0 0 8-8Z"
        fillRule="nonzero"
      />
      <path d="M10 5a1 1 0 0 1 1 1v3.586l1.707 1.707a1 1 0 0 1-1.414 1.414L9.586 11A2 2 0 0 1 9 9.586V6a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default HistoryFilled;
