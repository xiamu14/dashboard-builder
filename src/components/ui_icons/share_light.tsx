import * as React from "react";
import { SVGProps } from "react";

const ShareLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M10.164 5.136a3.998 3.998 0 0 0 1.03 1.714L7.835 8.864a3.998 3.998 0 0 0-1.03-1.714l3.358-2.014ZM6.807 12.85l3.356 2.014a3.998 3.998 0 0 1 1.03-1.714l-3.357-2.014a3.998 3.998 0 0 1-1.03 1.714Z"
        fillRule="nonzero"
      />
      <path d="M14 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM14 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    </g>
  </svg>
);

export default ShareLight;
