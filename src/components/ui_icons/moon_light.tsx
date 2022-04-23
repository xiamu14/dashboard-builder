import * as React from "react";
import { SVGProps } from "react";

const MoonLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.066 3.026a7 7 0 1 0 9.725 9.725 11.004 11.004 0 0 1-9.725-9.725ZM16 10.816c.866 0 1.612.764 1.27 1.56A9 9 0 1 1 5.441.547C6.236.205 7 .95 7 1.817a9 9 0 0 0 9 9Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default MoonLight;
