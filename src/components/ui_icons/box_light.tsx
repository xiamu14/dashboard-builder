import * as React from "react";
import { SVGProps } from "react";

const BoxLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m9.607 2-.933 2h2.652l-.933-2h-.786ZM7.4 2l-.933 2H2.828l1.708-1.707A1 1 0 0 1 5.243 2H7.4ZM.015 4.828a2.675 2.675 0 0 1 .769-1.612L3.12.88A3 3 0 0 1 5.243 0h9.514a3 3 0 0 1 2.122.879l2.337 2.337c.436.436.706 1.006.77 1.612A1 1 0 0 1 20 5v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5c0-.058.005-.116.015-.172ZM2 6v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6h-4v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6H2Zm6 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6H8Zm9.172-2-1.707-1.707A1 1 0 0 0 14.757 2H12.6l.933 2h3.639Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default BoxLight;
