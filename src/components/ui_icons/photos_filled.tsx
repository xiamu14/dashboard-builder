import * as React from "react";
import { SVGProps } from "react";

const PhotosFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 0a3 3 0 0 0-3 3v1H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H7Zm7 16H7a3 3 0 0 1-3-3V6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1Zm1.5-10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.981 7.877c.212-.117.198-.399.034-.577-1.032-1.128-4.661-5.096-6.582-7.192a2.5 2.5 0 0 0-3.764.09l-.937 1.124a1 1 0 0 0-.232.64V13a1 1 0 0 0 1 1h10a.996.996 0 0 0 .481-.123Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default PhotosFilled;
