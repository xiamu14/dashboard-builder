import * as React from "react";
import { SVGProps } from "react";

const InboxFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-4.853a1 1 0 0 1 .042-.288L2.36 2.138A3 3 0 0 1 5.232 0h9.536a3 3 0 0 1 2.873 2.138l2.317 7.721a.998.998 0 0 1 .042.288V15ZM14.768 2H5.232a1 1 0 0 0-.958.713L2.281 9.356a.5.5 0 0 0 .48.644h3.621a1 1 0 0 1 .894.553l.445.889a1 1 0 0 0 .894.553h2.77a1 1 0 0 0 .894-.553l.445-.89a1 1 0 0 1 .894-.552h3.622a.5.5 0 0 0 .479-.644l-1.993-6.643A1 1 0 0 0 14.768 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default InboxFilled;
