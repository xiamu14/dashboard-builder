import * as React from "react";
import { SVGProps } from "react";

const FolderAddLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M11 7a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 0 0-2h-2V7Z"
        fillRule="nonzero"
      />
      <path d="M9 4a2 2 0 0 1-1.414-.586L6.464 2.293A1 1 0 0 0 5.757 2H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9Zm0-2h8a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h2.757A3 3 0 0 1 7.88.879L9 2Z" />
    </g>
  </svg>
);

export default FolderAddLight;
