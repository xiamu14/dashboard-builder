import * as React from "react";
import { SVGProps } from "react";

const MoonFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.77 12.375c.342-.795-.404-1.558-1.27-1.558a9 9 0 0 1-9-9C7.5.95 6.737.205 5.941.547A9 9 0 1 0 17.77 12.375Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default MoonFilled;
