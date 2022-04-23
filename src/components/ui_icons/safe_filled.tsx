import * as React from "react";
import { SVGProps } from "react";

const SafeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M14 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fillRule="nonzero" />
      <path d="M3 0a3 3 0 0 0-3 3v10c0 1.306.835 2.418 2 2.83V16a2 2 0 1 0 4 0h8a2 2 0 1 0 4 0v-.17A3.001 3.001 0 0 0 20 13V3a3 3 0 0 0-3-3H3Zm2 6a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V6Zm4.293 5.707a1 1 0 0 1 0-1.414l1-1A2.988 2.988 0 0 1 10 8c0-.463.105-.902.292-1.293l-1-1a1 1 0 0 1 1.415-1.414l1 1C12.098 5.104 12.537 5 13 5c.463 0 .902.105 1.293.292l1-1a1 1 0 1 1 1.414 1.415l-1 1c.188.391.293.83.293 1.293 0 .463-.105.902-.292 1.294l.999.999a1 1 0 0 1-1.414 1.414l-1-1c-.391.188-.83.293-1.293.293-.463 0-.902-.105-1.293-.292l-1 .999a1 1 0 0 1-1.414 0Z" />
    </g>
  </svg>
);

export default SafeFilled;
