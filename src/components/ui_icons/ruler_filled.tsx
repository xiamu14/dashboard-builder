import * as React from "react";
import { SVGProps } from "react";

const RulerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.364 1.808a3 3 0 0 0-4.243 0L1.808 13.12a3 3 0 0 0 0 4.243l2.828 2.828a3 3 0 0 0 4.243 0L20.192 8.88a3 3 0 0 0 0-4.243l-2.828-2.828Zm-3.536 2.121a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l1.414 1.414a1 1 0 1 0 1.415-1.414L13.828 3.93ZM11 6.757a.5.5 0 0 0-.707 0l-.707.708a.5.5 0 0 0 0 .707l.707.707a1 1 0 1 0 1.414-1.415L11 6.757ZM8.172 9.586a.5.5 0 0 0-.708 0l-.707.707a.5.5 0 0 0 0 .707l1.415 1.414A1 1 0 0 0 9.586 11L8.172 9.586Zm-3.536 2.828a.5.5 0 0 1 .707 0l.707.707a1 1 0 1 1-1.414 1.415l-.707-.708a.5.5 0 0 1 0-.707l.707-.707Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default RulerFilled;
