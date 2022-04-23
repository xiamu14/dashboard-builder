import * as React from "react";
import { SVGProps } from "react";

const PizzaLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M9.118 11.715a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414Z"
        fillRule="nonzero"
      />
      <path d="M5.324 1.959.564 16.173a1.002 1.002 0 0 0 1.267 1.265l14.208-4.777c1.57-.528 2.435-2.244 1.678-3.718A20 20 0 0 0 9.04.276C7.565-.479 5.85.388 5.324 1.96Zm7.322 3.384a18 18 0 0 0-4.518-3.287.48.48 0 0 0-.452 0 .907.907 0 0 0-.455.538L6.863 3.66a16 16 0 0 1 7.472 7.463l1.067-.36a.907.907 0 0 0 .537-.455.48.48 0 0 0-.001-.452 18 18 0 0 0-3.292-4.514Zm-7.032 2.05.608-1.818a14 14 0 0 1 6.2 6.192l-9.323 3.135.614-1.835a3 3 0 1 0 1.9-5.674Zm-.031 3.615a1 1 0 0 1-1.23.146l.62-1.848a1 1 0 0 1 .61 1.702Z" />
    </g>
  </svg>
);

export default PizzaLight;
