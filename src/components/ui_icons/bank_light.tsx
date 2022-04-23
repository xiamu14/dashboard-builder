import * as React from "react";
import { SVGProps } from "react";

const BankLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M11.865 2.525a2 2 0 0 0-1.73 0L2.895 6l-.866-1.803L9.269.722a4 4 0 0 1 3.462 0l7.24 3.475C21.89 5.117 21.234 8 19.106 8H2.894C.766 8 .11 5.118 2.03 4.197L2.894 6h16.212l-7.24-3.475ZM11 9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1ZM4 9a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1ZM18 9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1ZM1 19a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default BankLight;
