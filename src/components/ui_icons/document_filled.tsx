import * as React from "react";
import { SVGProps } from "react";

const DocumentFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5.743a3 3 0 0 0-.879-2.122L14.38.88A3 3 0 0 0 12.257 0H3Zm9 2.207V4a2 2 0 0 0 2 2h1.793a.5.5 0 0 0 .353-.854l-3.292-3.292a.5.5 0 0 0-.854.353ZM4 9a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H5Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default DocumentFilled;
