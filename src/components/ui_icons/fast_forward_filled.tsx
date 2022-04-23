import * as React from "react";
import { SVGProps } from "react";

const FastForwardFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.333 9a2.5 2.5 0 0 0 0-4L14 1c-1.648-1.236-4-.06-4 2v2.75A2.493 2.493 0 0 0 9.333 5L4 1C2.352-.236 0 .94 0 3v8c0 2.06 2.352 3.236 4 2l5.333-4c.282-.211.504-.467.667-.75V11c0 2.06 2.352 3.236 4 2l5.333-4Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default FastForwardFilled;
