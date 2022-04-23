import * as React from "react";
import { SVGProps } from "react";

const CheckboxFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Zm10.707 6.707a1 1 0 0 0-1.414-1.414L7 10.586 5.207 8.793a1 1 0 0 0-1.414 1.414L5.586 12a2 2 0 0 0 2.828 0l5.293-5.293Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CheckboxFilled;
