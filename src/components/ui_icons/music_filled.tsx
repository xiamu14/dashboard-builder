import * as React from "react";
import { SVGProps } from "react";

const MusicFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.272 1.432A3 3 0 0 0 6 4.342v7.193A4 4 0 1 0 8 15V7.5l3.728-.932A3 3 0 0 0 14 3.658v-.456A2.5 2.5 0 0 0 10.894.777l-2.622.655Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default MusicFilled;
