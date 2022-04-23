import * as React from "react";
import { SVGProps } from "react";

const AlarmFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-12a1 1 0 1 0-2 0v3.586A2 2 0 0 0 9.586 11l1.707 1.707a1 1 0 0 0 1.414-1.414L11 9.586V6Z" />
      <path
        d="M5.466 1.085c-.25-.491-.854-.691-1.32-.398a11 11 0 0 0-3.45 3.444c-.294.467-.095 1.07.396 1.322.49.25 1.088.052 1.391-.409a9.004 9.004 0 0 1 2.573-2.568c.46-.303.66-.9.41-1.391ZM14.534 1.085c.25-.491.854-.691 1.32-.398a11 11 0 0 1 3.45 3.444c.294.467.095 1.07-.396 1.322-.49.25-1.088.052-1.391-.409a9.004 9.004 0 0 0-2.573-2.568c-.46-.303-.66-.9-.41-1.391Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default AlarmFilled;
