import * as React from "react";
import { SVGProps } from "react";

const ArchiveLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M11.002 9a1 1 0 1 0-2 0v4.086l-.795-.795a1 1 0 1 0-1.414 1.414L8.588 15.5a2 2 0 0 0 2.828 0l1.791-1.791a1 1 0 1 0-1.414-1.414l-.791.79V9Z"
        fillRule="nonzero"
      />
      <path d="M.015 4.828a2.675 2.675 0 0 1 .769-1.612L3.12.88A3 3 0 0 1 5.243 0h9.514a3 3 0 0 1 2.122.879l2.337 2.337c.436.436.706 1.006.77 1.612A1 1 0 0 1 20 5v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5c0-.058.005-.116.015-.172ZM5.243 2h9.514a1 1 0 0 1 .708.293L17.172 4H2.828l1.708-1.707A1 1 0 0 1 5.243 2ZM2 6v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6H2Z" />
    </g>
  </svg>
);

export default ArchiveLight;
