import * as React from "react";
import { SVGProps } from "react";

const GamepadLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M14 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path
        d="M7 7a1 1 0 0 0-2 0v1H4a1 1 0 1 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2H7V7Z"
        fillRule="nonzero"
      />
      <path d="M11 1a1 1 0 1 0-2 0v1H4a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-5V1ZM4 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Z" />
    </g>
  </svg>
);

export default GamepadLight;
