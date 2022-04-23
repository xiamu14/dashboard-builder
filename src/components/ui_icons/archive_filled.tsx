import * as React from "react";
import { SVGProps } from "react";

const ArchiveFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 5.702a2 2 0 0 1 .438-1.25L3.1 1.126A3 3 0 0 1 5.442 0h9.116a3 3 0 0 1 2.343 1.126l2.66 3.326A2 2 0 0 1 20 5.702V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5.702ZM5.442 2h9.116a1 1 0 0 1 .781.375l1.775 2.219a.25.25 0 0 1-.195.406H3.08a.25.25 0 0 1-.195-.406l1.775-2.219A1 1 0 0 1 5.441 2Zm5.56 7a1 1 0 0 0-2 0v5.086l-.795-.795a1 1 0 0 0-1.414 1.414L8.588 16.5a2 2 0 0 0 2.828 0l1.791-1.79a1 1 0 0 0-1.414-1.415l-.791.79V9Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ArchiveFilled;
