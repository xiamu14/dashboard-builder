import * as React from "react";
import { SVGProps } from "react";

const CloudCheckLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M13.207 6.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 0 1 1.414-1.414l.793.793 2.293-2.293a1 1 0 0 1 1.414 0Z" />
      <path d="M12.744 13c.041-.005.083-.01.125-.012a5.5 5.5 0 1 0-5.24-8.045A2 2 0 0 1 5.73 6.007a3.5 3.5 0 0 0-.55 6.978c.04.004.08.01.119.015h7.445ZM13 14.984A7.5 7.5 0 1 0 5.859 4.012 5.5 5.5 0 0 0 5 14.978V15h8v-.016Z" />
    </g>
  </svg>
);

export default CloudCheckLight;
