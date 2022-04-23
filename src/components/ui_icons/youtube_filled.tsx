import * as React from "react";
import { SVGProps } from "react";

const YoutubeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.279.747A3.032 3.032 0 0 0 .623 3.262a22.74 22.74 0 0 0 0 7.476 3.032 3.032 0 0 0 2.656 2.515l.53.06c4.115.456 8.267.456 12.382 0l.53-.06a3.032 3.032 0 0 0 2.656-2.515 22.74 22.74 0 0 0 0-7.476A3.032 3.032 0 0 0 16.721.747l-.53-.06a56.06 56.06 0 0 0-12.382 0l-.53.06Zm9.473 7.085a1 1 0 0 0 0-1.664L9.555 4.036A1 1 0 0 0 8 4.87V9.13a1 1 0 0 0 1.555.833l3.197-2.132Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default YoutubeFilled;
