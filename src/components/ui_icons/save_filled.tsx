import * as React from "react";
import { SVGProps } from "react";

const SaveFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6.243a3 3 0 0 0-.879-2.122L15.88.88A3 3 0 0 0 13.757 0H3Zm1 14a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3Zm9-7H7a2 2 0 0 1-2-2V3a1 1 0 0 1 1-1h7.586a1 1 0 0 1 .707.293l.414.414a1 1 0 0 1 .293.707V5a2 2 0 0 1-2 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default SaveFilled;
