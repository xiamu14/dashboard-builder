import * as React from "react";
import { SVGProps } from "react";

const ScissorsLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M15.781 2.157a1 1 0 1 0-1.732-1L6.881 13.573a3.5 3.5 0 1 0 .15 3.74l8.75-15.156ZM5.3 16.312a1.5 1.5 0 1 1-2.598-1.5 1.5 1.5 0 0 1 2.598 1.5Z" />
      <path d="M4.219 2.157a1 1 0 0 1 1.732-1l7.168 12.416a3.5 3.5 0 1 1-.15 3.74l-.008-.014L4.22 2.157Zm10.485 14.16a1.5 1.5 0 1 0-.008-.013l.005.008.003.006Z" />
    </g>
  </svg>
);

export default ScissorsLight;
