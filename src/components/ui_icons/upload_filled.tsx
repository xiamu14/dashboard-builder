import * as React from "react";
import { SVGProps } from "react";

const UploadFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M14.207 5.29a1 1 0 1 1-1.414 1.415l-2.791-2.791V11a1 1 0 1 1-2 0V3.914L5.209 6.707a1 1 0 0 1-1.414-1.415l4.5-4.5a1 1 0 0 1 1.414 0l4.498 4.499Z"
        fillRule="nonzero"
      />
      <path d="M1 10a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default UploadFilled;
