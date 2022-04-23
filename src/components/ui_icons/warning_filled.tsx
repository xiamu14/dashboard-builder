import * as React from "react";
import { SVGProps } from "react";

const WarningFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.394 1.574c1.15-2.02 4.062-2.02 5.212 0l6.805 11.94c1.14 2-.304 4.486-2.606 4.486H3.195C.893 18-.55 15.515.59 13.515L7.394 1.574ZM10 11a1 1 0 0 0 1-1V5a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default WarningFilled;
