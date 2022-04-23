import * as React from "react";
import { SVGProps } from "react";

const LocationLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M13.712 11.806a6.035 6.035 0 1 0-9.424 0l.006.007c.175.218.337.448.506.672.293.388.706.934 1.186 1.561.895 1.17 2.012 2.61 3.015 3.848a184.95 184.95 0 0 0 3.021-3.854c.481-.628.895-1.174 1.189-1.563.167-.223.327-.454.501-.671Zm1.563 1.253a1.695 1.695 0 0 1-7.596 6.38c-1.437-1.76-3.086-3.885-4.945-6.374l-.007-.008a8.035 8.035 0 1 1 12.55-.006l-.003.003-.002.002h.005l-.002.003Z" />
      <path d="M9 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </g>
  </svg>
);

export default LocationLight;
