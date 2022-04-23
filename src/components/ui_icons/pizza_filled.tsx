import * as React from "react";
import { SVGProps } from "react";

const PizzaFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M8.959 1.184c-1.475-.755-3.19.112-3.716 1.683l-.286.854a17 17 0 0 1 10.147 10.135l.854-.287c1.57-.528 2.435-2.244 1.678-3.718A20 20 0 0 0 8.96 1.184Z"
        fillRule="nonzero"
      />
      <path d="M13.207 14.494a15 15 0 0 0-8.885-8.875l-.653 1.949c-.107.319.128.65.454.734a3 3 0 1 1-1.9 5.676c-.31-.13-.698-.006-.805.313l-.935 2.79a1 1 0 0 0 1.267 1.265l11.457-3.852ZM8.33 13.33a1 1 0 1 0 1.414-1.414A1 1 0 0 0 8.33 13.33Z" />
    </g>
  </svg>
);

export default PizzaFilled;
