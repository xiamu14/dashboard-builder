import * as React from "react";
import { SVGProps } from "react";

const CompassFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10Zm-6.22-5.086L8.27 7.183A2 2 0 0 0 7.184 8.27l-2.27 5.51c-.338.822.484 1.644 1.306 1.305l5.51-2.269a2 2 0 0 0 1.088-1.088l2.27-5.51c.338-.822-.484-1.644-1.306-1.305Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CompassFilled;
