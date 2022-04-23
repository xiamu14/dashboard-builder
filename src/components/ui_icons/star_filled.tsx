import * as React from "react";
import { SVGProps } from "react";

const StarFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.136 1.843c.623-1.79 3.156-1.79 3.778 0l.946 2.72a2 2 0 0 0 1.848 1.343l2.88.06c1.895.038 2.678 2.447 1.167 3.592l-2.295 1.74a2 2 0 0 0-.706 2.173l.834 2.757c.549 1.815-1.5 3.303-3.057 2.22l-2.364-1.645a2 2 0 0 0-2.284 0l-2.364 1.645c-1.557 1.083-3.606-.405-3.057-2.22l.834-2.757a2 2 0 0 0-.706-2.173l-2.295-1.74C-.215 8.413.567 6.004 2.463 5.965l2.879-.059A2 2 0 0 0 7.19 4.563l.946-2.72Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default StarFilled;
