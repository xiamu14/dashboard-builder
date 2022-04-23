import * as React from "react";
import { SVGProps } from "react";

const DesignFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M1.454 4.283a3 3 0 0 0 0 4.242l1.867 1.867a1 1 0 0 0 1.413 0l5.663-5.65a1 1 0 0 0 0-1.415L8.526 1.454a3 3 0 0 0-4.242 0L1.454 4.283ZM11.804 18.875a1 1 0 0 1 0-1.413l5.65-5.663a1 1 0 0 1 1.415 0l1.677 1.676a3 3 0 0 1 0 4.243l-2.828 2.828a3 3 0 0 1-4.243 0l-1.67-1.67ZM15.867 2.086a2 2 0 0 1 2.829 0L20.11 3.5a2 2 0 0 1 0 2.828l-.707.708a1 1 0 0 1-1.414 0L15.16 4.207a1 1 0 0 1 0-1.414l.707-.707ZM13.746 5.621a1 1 0 0 0-1.414 0l-9.365 9.365a1 1 0 0 0-.253.427l-1.17 4.017a1 1 0 0 0 1.244 1.239l3.997-1.187a1 1 0 0 0 .423-.251l9.367-9.367a1 1 0 0 0 0-1.414L13.746 5.62Z" />
    </g>
  </svg>
);

export default DesignFilled;
