import * as React from "react";
import { SVGProps } from "react";

const KeyboardFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Zm0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2.5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM10 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2.5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM17 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5.5 10.5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1ZM3 9.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm13 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-13-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2.5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2.5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default KeyboardFilled;
