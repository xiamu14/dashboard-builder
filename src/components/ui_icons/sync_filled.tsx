import * as React from "react";
import { SVGProps } from "react";

const SyncFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M2 10a8 8 0 0 1 8-8 7.846 7.846 0 0 1 6.182 2.993l-1.68-.005a1 1 0 1 0-.005 2l3.443.01a.996.996 0 0 0 .116 0l.441.002A1 1 0 0 0 19.5 6V2a1 1 0 1 0-2 0v1.45A9.83 9.83 0 0 0 10 0C4.477 0 0 4.477 0 10a1 1 0 1 0 2 0ZM18 10a8 8 0 0 1-8 8 7.846 7.846 0 0 1-6.182-2.993l1.68.005a1 1 0 1 0 .005-2l-3.443-.01a.996.996 0 0 0-.116 0L1.503 13A1 1 0 0 0 .5 14v4a1 1 0 1 0 2 0v-1.45A9.83 9.83 0 0 0 10 20c5.523 0 10-4.477 10-10a1 1 0 1 0-2 0Z" />
    </g>
  </svg>
);

export default SyncFilled;
