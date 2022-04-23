import * as React from "react";
import { SVGProps } from "react";

const ShowLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 12c4.112 0 6.587-3.067 7.683-4.895A.2.2 0 0 0 17.715 7a.2.2 0 0 0-.032-.105C16.587 5.067 14.113 2 10 2 5.888 2 3.413 5.067 2.317 6.895A.2.2 0 0 0 2.285 7a.2.2 0 0 0 .032.105C3.413 8.933 5.888 12 10 12Zm9.398-3.867C18.21 10.115 15.215 14 10 14S1.79 10.115.602 8.133a2.186 2.186 0 0 1 0-2.266C1.79 3.885 4.785 0 10 0s8.21 3.885 9.398 5.867a2.186 2.186 0 0 1 0 2.266Z" />
      <path d="M10 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </g>
  </svg>
);

export default ShowLight;
