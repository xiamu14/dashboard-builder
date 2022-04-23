import * as React from "react";
import { SVGProps } from "react";

const TrashFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M2 6a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a1 1 0 0 0-1-1H2Zm4 3a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm7 1a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Z" />
      <path
        d="M1 4a1 1 0 0 1 0-2h3.17A3.001 3.001 0 0 1 7 0h4c1.306 0 2.418.835 2.83 2H17a1 1 0 1 1 0 2H1Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default TrashFilled;
