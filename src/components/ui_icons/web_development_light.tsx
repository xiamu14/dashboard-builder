import * as React from "react";
import { SVGProps } from "react";

const WebDevelopmentLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fillRule="nonzero"
      />
      <path d="M12.793 15.421a1 1 0 0 1 0-1.414L13.8 13l-1.007-1.007a1 1 0 1 1 1.414-1.414l1.714 1.714a1 1 0 0 1 0 1.414l-1.714 1.714a1 1 0 0 1-1.414 0ZM7.207 15.421a1 1 0 0 0 0-1.414L6.2 13l1.007-1.007a1 1 0 1 0-1.414-1.414l-1.714 1.714a1 1 0 0 0 0 1.414l1.714 1.714a1 1 0 0 0 1.414 0ZM11.132 9.038a1 1 0 0 0-1.236.687l-1.715 6a1 1 0 0 0 1.923.55l1.715-6a1 1 0 0 0-.687-1.237Z" />
      <path d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1h14a1 1 0 0 1 1 1v3H2V3a1 1 0 0 1 1-1ZM2 8v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8H2Z" />
    </g>
  </svg>
);

export default WebDevelopmentLight;
