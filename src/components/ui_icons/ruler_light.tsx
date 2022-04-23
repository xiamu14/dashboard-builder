import * as React from "react";
import { SVGProps } from "react";

const RulerLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.364 1.808a3 3 0 0 0-4.243 0L1.808 13.12a3 3 0 0 0 0 4.243l2.828 2.828a3 3 0 0 0 4.243 0L20.192 8.88a3 3 0 0 0 0-4.243l-2.828-2.828ZM15.95 3.222a1 1 0 0 0-1.414 0l-.708.707 1.415 1.414a1 1 0 0 1-1.415 1.414l-1.414-1.414L11 6.757l.707.707a1 1 0 1 1-1.414 1.415l-.707-.707-1.414 1.414L9.586 11a1 1 0 0 1-1.414 1.414L6.757 11l-1.414 1.414.707.707a1 1 0 1 1-1.414 1.415l-.707-.708-.707.708a1 1 0 0 0 0 1.414l2.828 2.828a1 1 0 0 0 1.414 0L18.778 7.464a1 1 0 0 0 0-1.414L15.95 3.222Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default RulerLight;
