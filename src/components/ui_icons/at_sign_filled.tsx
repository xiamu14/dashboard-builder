import * as React from "react";
import { SVGProps } from "react";

const AtSignFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 2a8 8 0 1 0 3.555 15.169 1 1 0 1 1 .89 1.791A9.963 9.963 0 0 1 10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10v1c0 1.409-.353 2.535-1.013 3.328A3.199 3.199 0 0 1 16.5 15.5a3.564 3.564 0 0 1-3.09-1.843A5 5 0 1 1 13 6a1 1 0 0 1 2 0v6c0 .884.736 1.5 1.5 1.5a1.2 1.2 0 0 0 .95-.453c.278-.332.55-.956.55-2.047v-1a8 8 0 0 0-8-8Zm3 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default AtSignFilled;
