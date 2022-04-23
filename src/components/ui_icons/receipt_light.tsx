import * as React from "react";
import { SVGProps } from "react";

const ReceiptLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M2 16.768a2 2 0 0 1 2.2.132l.8.6.8-.6a2 2 0 0 1 2.4 0l.8.6.8-.6a2 2 0 0 1 2.4 0l.8.6.8-.6a2 2 0 0 1 2.2-.132V3.232a2 2 0 0 1-2.2-.132l-.8-.6-.8.6a2 2 0 0 1-2.4 0L9 2.5l-.8.6a2 2 0 0 1-2.4 0L5 2.5l-.8.6a2 2 0 0 1-2.2.132v13.536ZM7 1.5 5.6.45a1 1 0 0 0-1.2 0L3 1.5 1.64.367A1 1 0 0 0 0 1.135v17.73a1 1 0 0 0 1.64.768L3 18.5l1.4 1.05a1 1 0 0 0 1.2 0L7 18.5l1.4 1.05a1 1 0 0 0 1.2 0L11 18.5l1.4 1.05a1 1 0 0 0 1.2 0L15 18.5l1.36 1.133a1 1 0 0 0 1.64-.768V1.135a1 1 0 0 0-1.64-.768L15 1.5 13.6.45a1 1 0 0 0-1.2 0L11 1.5 9.6.45a1 1 0 0 0-1.2 0L7 1.5Z" />
      <path d="M4 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM4 12a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default ReceiptLight;
