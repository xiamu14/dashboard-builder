import * as React from "react";
import { SVGProps } from "react";

const ShieldLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8.684 2.714-6 2A1 1 0 0 0 2 5.662V11c0 2.026 1.015 3.755 2.484 5.21 1.473 1.457 3.246 2.474 4.343 3.017a.377.377 0 0 0 .346 0c1.097-.543 2.87-1.56 4.343-3.017C14.986 14.755 16 13.026 16 11V5.662a1 1 0 0 0-.684-.948l-6-2a1 1 0 0 0-.632 0Zm-6.633.102A3 3 0 0 0 0 5.662V11c0 5.502 5.56 8.842 7.94 10.02a2.377 2.377 0 0 0 2.12 0C12.44 19.841 18 16.501 18 11V5.662a3 3 0 0 0-2.051-2.846l-6-2a3 3 0 0 0-1.898 0l-6 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ShieldLight;
