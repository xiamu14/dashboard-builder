import * as React from "react";
import { SVGProps } from "react";

const DownloadFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M10.002 1a1 1 0 1 0-2 0v8.086L5.209 6.293a1 1 0 1 0-1.414 1.414L7.588 11.5a2 2 0 0 0 2.828 0l3.791-3.79a1 1 0 1 0-1.414-1.415l-2.791 2.79V1Z"
        fillRule="nonzero"
      />
      <path d="M1 10a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default DownloadFilled;
