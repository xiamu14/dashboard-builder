import * as React from "react";
import { SVGProps } from "react";

const BankFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path
        d="M22.209 6.003c.513.271.305.997-.286.997H2.077c-.59 0-.799-.726-.286-.997l8.78-4.651a3.077 3.077 0 0 1 2.857 0l8.78 4.65Z"
        stroke={props.color || "#6F767E"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 10.5a1 1 0 0 0-2 0h2Zm-2 5a1 1 0 0 0 2 0h-2Zm0-5v5h2v-5h-2ZM6 10.5a1 1 0 1 0-2 0h2Zm-2 5a1 1 0 1 0 2 0H4Zm0-5v5h2v-5H4ZM20 10.5a1 1 0 1 0-2 0h2Zm-2 5a1 1 0 1 0 2 0h-2Zm0-5v5h2v-5h-2ZM3 18a1 1 0 1 0 0 2v-2Zm18 2a1 1 0 1 0 0-2v2ZM3 20h18v-2H3v2Z" />
    </g>
  </svg>
);

export default BankFilled;
