import * as React from "react";
import { SVGProps } from "react";

const FileAddFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 3a3 3 0 0 1 3-3h9.257a3 3 0 0 1 2.122.879L17.12 3.62A3 3 0 0 1 18 5.743V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm12 1V2.207a.5.5 0 0 1 .854-.353l3.292 3.292a.5.5 0 0 1-.353.854H14a2 2 0 0 1-2-2ZM9 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H6a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FileAddFilled;
