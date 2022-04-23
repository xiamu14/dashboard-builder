import * as React from "react";
import { SVGProps } from "react";

const BookFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 17"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3.026a6 6 0 0 1 1.898.308l1.76.587a1 1 0 0 0 .632 0l1.76-.587A6.001 6.001 0 0 1 13.974 16H17a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3h-4a3.987 3.987 0 0 0-2.805 1.149.28.28 0 0 1-.39 0A3.987 3.987 0 0 0 7 0H3Zm8 14.558.444-.148a8 8 0 0 1 2.53-.41H17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4a2 2 0 0 0-2 2v10.558Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default BookFilled;
