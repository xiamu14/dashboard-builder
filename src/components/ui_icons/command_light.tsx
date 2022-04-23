import * as React from "react";
import { SVGProps } from "react";

const CommandLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 3.5a3.5 3.5 0 1 1 7 0V5h4V3.5A3.5 3.5 0 1 1 14.5 7H13v4h1.5a3.5 3.5 0 1 1-3.5 3.5V13H7v1.5A3.5 3.5 0 1 1 3.5 11H5V7H3.5A3.5 3.5 0 0 1 0 3.5ZM5 5V3.5A1.5 1.5 0 1 0 3.5 5H5Zm2 2v4h4V7H7Zm-2 6H3.5A1.5 1.5 0 1 0 5 14.5V13Zm8 0v1.5a1.5 1.5 0 1 0 1.5-1.5H13Zm0-8h1.5A1.5 1.5 0 1 0 13 3.5V5Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CommandLight;
