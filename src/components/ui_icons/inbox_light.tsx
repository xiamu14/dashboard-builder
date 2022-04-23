import * as React from "react";
import { SVGProps } from "react";

const InboxLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 10.147a1 1 0 0 0-.042-.288L17.64 2.138A3 3 0 0 0 14.768 0H5.232A3 3 0 0 0 2.36 2.138L.042 9.859a1 1 0 0 0-.042.288V15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4.853ZM14.768 2H5.232a1 1 0 0 0-.958.713L2.088 10h4.294a1 1 0 0 1 .894.553l.721 1.441a.01.01 0 0 0 .01.006h3.987a.01.01 0 0 0 .009-.005l.72-1.442a1 1 0 0 1 .895-.553h4.294l-2.186-7.287A1 1 0 0 0 14.768 2ZM18 12h-3.764l-.444.889A2.01 2.01 0 0 1 11.994 14H8.006a2.01 2.01 0 0 1-1.798-1.111L5.764 12H2v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default InboxLight;
