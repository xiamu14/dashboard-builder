import * as React from "react";
import { SVGProps } from "react";

const VectorLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.732 2H7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.268A2 2 0 0 1 20 3a2 2 0 0 1-3.732 1h-1.369A6.979 6.979 0 0 1 17 9v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2V9c0-1.722-.87-3.24-2.194-4.14A2 2 0 0 1 11 6H9a2 2 0 0 1-1.806-1.14A4.995 4.995 0 0 0 5 9v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2V9c0-1.959.804-3.73 2.101-5H3.732a2 2 0 1 1 0-2ZM11 2H9v2h2V2ZM5 12H3v2h2v-2Zm10 0h2v2h-2v-2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default VectorLight;
