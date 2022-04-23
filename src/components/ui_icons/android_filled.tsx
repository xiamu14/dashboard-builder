import * as React from "react";
import { SVGProps } from "react";

const AndroidFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 13"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.004.632a1 1 0 0 1 1.364.372l1.62 2.834A9.966 9.966 0 0 1 10 3c1.427 0 2.784.299 4.013.838l1.619-2.834a1 1 0 1 1 1.736.992l-1.614 2.825A9.993 9.993 0 0 1 19.951 12c.054.55-.399.999-.951.999H1c-.552 0-1.005-.449-.95-.999a9.993 9.993 0 0 1 4.196-7.18L2.632 1.995A1 1 0 0 1 3.004.632ZM6 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default AndroidFilled;
