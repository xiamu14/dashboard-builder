import * as React from "react";
import { SVGProps } from "react";

const FilesFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 3a3 3 0 0 1 3-3h5.257a3 3 0 0 1 2.122.879L17.12 3.62A3 3 0 0 1 18 5.743V13a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3Zm0 10V6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1H7a3 3 0 0 1-3-3Zm8-10.793V4a2 2 0 0 0 2 2h1.793a.5.5 0 0 0 .353-.854l-3.292-3.292a.5.5 0 0 0-.854.353Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FilesFilled;
