import * as React from "react";
import { SVGProps } from "react";

const ImageLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M14 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1h14a1 1 0 0 1 1 1v14a.995.995 0 0 1-.205.606c-.03-.04-.063-.08-.1-.12L8.57 7.53a3 3 0 0 0-4.516.106L2 10.1V3a1 1 0 0 1 1-1ZM2 13.224V17a1 1 0 0 0 1 1h12.454l-8.36-9.119a1 1 0 0 0-1.505.036L2 13.224Z" />
    </g>
  </svg>
);

export default ImageLight;
