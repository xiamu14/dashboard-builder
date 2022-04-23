import * as React from "react";
import { SVGProps } from "react";

const AndroidLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 13"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M6 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM14 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        fillRule="nonzero"
      />
      <path d="M3.004.632a1 1 0 0 1 1.364.372l1.62 2.834A9.966 9.966 0 0 1 10 3c1.427 0 2.784.299 4.012.838l1.62-2.834a1 1 0 1 1 1.736.992L15.754 4.82a9.993 9.993 0 0 1 4.197 7.181c.054.55-.399.999-.951.999H1c-.552 0-1.005-.449-.95-.999a9.993 9.993 0 0 1 4.196-7.18L2.632 1.995A1 1 0 0 1 3.004.632ZM10 5c3.727 0 6.86 2.55 7.748 6H2.252C3.139 7.55 6.272 5 10 5Z" />
    </g>
  </svg>
);

export default AndroidLight;
