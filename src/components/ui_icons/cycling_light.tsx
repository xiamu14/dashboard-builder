import * as React from "react";
import { SVGProps } from "react";

const CyclingLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="m16.24 12.007-1.395-4.524-1.912.59 1.334 4.321a4 4 0 1 0 1.973-.387ZM16 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M8.521 5.248a2 2 0 0 1 2.976-.165L13.414 7H16a1 1 0 1 1 0 2h-2.77c-.412 0-.808-.164-1.1-.456l-2.047-2.047-2.62 3.276 3.266 2.178c.547.364.806 1.034.646 1.671l-.905 3.62a1 1 0 1 1-1.94-.485l.829-3.316-3.006-2.004A2 2 0 0 1 5.9 8.524l2.621-3.276Z" />
    </g>
  </svg>
);

export default CyclingLight;
