import * as React from "react";
import { SVGProps } from "react";

const FileLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h10l.01.01A3 3 0 0 1 14.88.88L17.12 3.12a3 3 0 0 1 .868 1.868L18 5v12Zm-3 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9v2a2 2 0 0 0 2 2h2v11a1 1 0 0 1-1 1Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FileLight;
