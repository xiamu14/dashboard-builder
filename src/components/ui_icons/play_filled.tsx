import * as React from "react";
import { SVGProps } from "react";

const PlayFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.604 5.414c1.972 1.16 1.972 4.012 0 5.172L4.521 15.34C2.521 16.517 0 15.075 0 12.755v-9.51C0 .925 2.521-.517 4.521.66l8.083 4.755Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default PlayFilled;
