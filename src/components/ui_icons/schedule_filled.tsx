import * as React from "react";
import { SVGProps } from "react";

const ScheduleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M6 1a1 1 0 0 0-2 0v1H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h5.876c.448 0 .69-.565.43-.929a7 7 0 0 1 9.766-9.766c.363.26.928.02.928-.429V5a3 3 0 0 0-3-3h-1V1a1 1 0 1 0-2 0v1H6V1Z"
        fillRule="nonzero"
      />
      <path d="M20 15a5 5 0 1 0-10 0 5 5 0 0 0 10 0Zm-4-2a1 1 0 1 0-2 0v2a1 1 0 0 0 .293.707l1.5 1.5a1 1 0 0 0 1.414-1.414L16 14.586V13Z" />
    </g>
  </svg>
);

export default ScheduleFilled;
