import * as React from "react";
import { SVGProps } from "react";

const CheckCircledLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10Zm-2 0a8 8 0 1 1-2.058-5.356L9 11.586 6.207 8.793a1 1 0 0 0-1.414 1.414L7.586 13a2 2 0 0 0 2.828 0l6.688-6.687A7.966 7.966 0 0 1 18 10Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CheckCircledLight;
