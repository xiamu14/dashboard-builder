import * as React from "react";
import { SVGProps } from "react";

const LoaderLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM10 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1ZM2.929 2.929a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L2.93 4.343a1 1 0 0 1 0-1.414ZM14.243 14.243a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414ZM0 10a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1ZM16 10a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1ZM2.929 17.071a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414 0ZM14.243 5.757a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414 0Z" />
    </g>
  </svg>
);

export default LoaderLight;
