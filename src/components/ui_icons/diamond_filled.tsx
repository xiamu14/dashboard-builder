import * as React from "react";
import { SVGProps } from "react";

const DiamondFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M2.767 1.218.517 4.426A1 1 0 0 0 1.338 6h17.327a1 1 0 0 0 .818-1.574l-2.25-3.208A3 3 0 0 0 14.82 0H5.181a3 3 0 0 0-2.414 1.218ZM19.36 9.6a1 1 0 0 0-.8-1.6H1.44a1 1 0 0 0-.8 1.6l6.98 9.295a3 3 0 0 0 4.76 0L19.36 9.6Z" />
    </g>
  </svg>
);

export default DiamondFilled;
