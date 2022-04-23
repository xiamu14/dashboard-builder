import * as React from "react";
import { SVGProps } from "react";

const CloudOffLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M7.322 5.906a6.99 6.99 0 0 0-.76 1.343A5 5 0 1 0 5 17h7.999c1.529 0 2.943-.49 4.094-1.322l-1.44-1.44A4.976 4.976 0 0 1 13 15H5a3 3 0 1 1 .937-5.851A2 2 0 0 0 8.4 8.035c.103-.24.224-.47.361-.69l-1.44-1.44ZM17.103 12.859a5 5 0 0 0-6.961-6.962l-1.43-1.43a7 7 0 0 1 9.821 9.821l-1.43-1.43Z" />
      </g>
      <path d="M.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default CloudOffLight;
