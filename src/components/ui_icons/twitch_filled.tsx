import * as React from "react";
import { SVGProps } from "react";

const TwitchFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7.849a3 3 0 0 1-.77 2.007l-2.836 3.15a3 3 0 0 1-2.23.994h-2.78a1 1 0 0 0-.67.257l-3.045 2.74c-.644.58-1.669.123-1.669-.742V17.5a.5.5 0 0 0-.5-.5H3a3 3 0 0 1-3-3V3Zm7 2a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Zm6 1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V6Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default TwitchFilled;
