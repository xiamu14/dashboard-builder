import * as React from "react";
import { SVGProps } from "react";

const SendFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.296.906C1.91-.195-.638 2.086.193 4.578L1.454 8.32a1 1 0 0 0 .948.68H11a1 1 0 1 1 0 2H2.402a1 1 0 0 0-.948.68L.193 15.423c-.831 2.493 1.717 4.773 4.103 3.672l13.802-6.37c2.324-1.073 2.324-4.375 0-5.448L4.296.906Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default SendFilled;
