import * as React from "react";
import { SVGProps } from "react";

const ImageFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm17.083 14.997c.483-.04.475-.65.148-1.008L8.568 7.53a3 3 0 0 0-4.516.107L2.232 9.822a1 1 0 0 0-.232.64V17a1 1 0 0 0 1 1h14c.028 0 .056-.001.083-.003ZM15 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ImageFilled;
