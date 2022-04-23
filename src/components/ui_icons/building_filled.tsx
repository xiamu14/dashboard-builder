import * as React from "react";
import { SVGProps } from "react";

const BuildingFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.272 2.432A3 3 0 0 0 2 5.342V18H1a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2h-1V9a3 3 0 0 0-3-3h-1V3.842a3 3 0 0 0-3.728-2.91l-6 1.5ZM16 9v9h-2V8h1a1 1 0 0 1 1 1Zm-9 5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm-1-3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2H7Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default BuildingFilled;
