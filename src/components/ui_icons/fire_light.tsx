import * as React from "react";
import { SVGProps } from "react";

const FireLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m5 10-.894 1.789a2 2 0 0 0 2.79-2.425l-.001-.004a5.113 5.113 0 0 1 .02-2.786c.395-1.314.942-2.268 1.49-2.955.354 1.232 1 2.615 2.18 3.795.226.226.472.45.726.68C12.566 9.237 14 10.542 14 13c0 2.605-2.538 5-6 5-3.274 0-6-2.226-6-6 0-.574.094-1.267.244-2.004.25.399.521.723.78.98.25.251.485.436.674.567.13.09.264.174.406.245.001 0 .3-.595.896-1.788Zm-.038-3.867a6.861 6.861 0 0 0-.237 1.459C4.675 8.52 4.766 9.324 5 10c-.667-.333-1.167-1-1.5-2a51.453 51.453 0 0 0-.623-1.732c-.34-.794-1.442-.77-1.714.07C.615 8.028 0 10.303 0 12c0 5 3.747 8 8 8s8-3 8-7c0-3.429-2.204-5.388-3.464-6.507A13.4 13.4 0 0 1 12 6c-1.406-1.406-1.848-3.254-1.975-4.525C9.955.77 9.275.27 8.686.662c-1.885 1.25-3.128 3.32-3.724 5.471Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FireLight;
