import * as React from "react";
import { SVGProps } from "react";

const CyclingFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M14 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fillRule="nonzero" />
      <path d="M4 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M16 20a4 4 0 0 0 .24-7.993L15.313 9H16a1 1 0 1 0 0-2h-2.586l-1.917-1.917a2 2 0 0 0-2.976.165l-2.62 3.276a2 2 0 0 0 .452 2.913l3.006 2.004-.83 3.316a1 1 0 1 0 1.941.485l.905-3.62c.16-.637-.099-1.307-.646-1.671L7.462 9.773l2.621-3.276 2.047 2.047c.29.29.68.453 1.09.456l1.046 3.394A4 4 0 0 0 16 20Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
  </svg>
);

export default CyclingFilled;
