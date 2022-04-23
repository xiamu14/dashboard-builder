import * as React from "react";
import { SVGProps } from "react";

const DropLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.602 9.043c.034.052.07.102.11.151a6.035 6.035 0 1 1-9.424 0l.006-.007.042-.055a235.36 235.36 0 0 1 1.65-2.178c.895-1.17 2.012-2.61 3.015-3.848a184.95 184.95 0 0 1 3.022 3.854c.72.942 1.292 1.7 1.53 2.018l.049.065Zm1.673-1.102a1.695 1.695 0 0 0-7.596-6.38c-1.437 1.76-3.086 3.885-4.945 6.374l-.007.009a8.035 8.035 0 1 0 12.55.006l-.003-.004-.001-.002h.004l-.002-.003Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default DropLight;
