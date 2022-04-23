import * as React from "react";
import { SVGProps } from "react";

const BrushLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 2h10a1 1 0 0 1 1 1v5H3V3a1 1 0 0 1 1-1ZM1 8V3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5a1 1 0 0 1 1 1v1.426a3 3 0 0 1-2.544 2.965l-2.112.325a2 2 0 0 0-1.69 2.143l.097 1.151a2.76 2.76 0 1 1-5.502 0l.096-1.15a2 2 0 0 0-1.689-2.144l-2.112-.325A3 3 0 0 1 0 10.426V9a1 1 0 0 1 1-1Zm15 2H2v.426a1 1 0 0 0 .848.989l2.112.325a4 4 0 0 1 3.378 4.285l-.096 1.152a.76.76 0 1 0 1.516 0l-.096-1.152a4 4 0 0 1 3.378-4.285l2.112-.325a1 1 0 0 0 .848-.989V10Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default BrushLight;
