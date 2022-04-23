import * as React from "react";
import { SVGProps } from "react";

const SaveLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.757 0a3 3 0 0 1 2.122.879L19.12 4.12A3 3 0 0 1 20 6.243V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h10.757ZM3 18h1v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h1a1 1 0 0 0 1-1V6.243a1 1 0 0 0-.293-.707L15 2.828V5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1ZM7 2v3h6V2.03a1 1 0 0 0-.243-.03H7Zm7 16H6v-4h8v4Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default SaveLight;
