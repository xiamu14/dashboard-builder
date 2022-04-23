import * as React from "react";
import { SVGProps } from "react";

const HeadphoneLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 2a8 8 0 0 0-8 8h2a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-6C0 4.477 4.477 0 10 0s10 4.477 10 10v6a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h2a8 8 0 0 0-8-8Zm8 10h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4ZM2 12v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default HeadphoneLight;
