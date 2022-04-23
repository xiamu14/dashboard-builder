import * as React from "react";
import { SVGProps } from "react";

const MessagesFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 5.5V7H2.5A2.5 2.5 0 0 0 0 9.5v10.38c0 1.257 1.455 1.956 2.437 1.17l2.426-1.94a.5.5 0 0 1 .312-.11H13.5a2.5 2.5 0 0 0 2.5-2.5V15h1.5a2.5 2.5 0 0 0 2.5-2.5V1.803C20 .605 18.665-.11 17.668.555l-3.542 2.361a.5.5 0 0 1-.277.084H6.5A2.5 2.5 0 0 0 4 5.5ZM13.5 7H6V5.5a.5.5 0 0 1 .5-.5h7.349a2.5 2.5 0 0 0 1.386-.42L18 2.737V12.5a.5.5 0 0 1-.5.5H16V9.5A2.5 2.5 0 0 0 13.5 7ZM5 12a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default MessagesFilled;
