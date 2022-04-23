import * as React from "react";
import { SVGProps } from "react";

const BookLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 17"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 2h4a2 2 0 0 1 2 2v10.558l-.444-.148a8 8 0 0 0-2.53-.41H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm7.316 14.895a1 1 0 0 1-.632 0l-1.76-.587A6 6 0 0 0 6.026 16H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h4a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 13 0h4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-3.026c-.645 0-1.286.104-1.898.308l-1.76.587ZM13 2h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3.026a8 8 0 0 0-2.53.41l-.444.148V4a2 2 0 0 1 2-2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default BookLight;
