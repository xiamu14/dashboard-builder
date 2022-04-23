import * as React from "react";
import { SVGProps } from "react";

const HourglassFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 1a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v.578a8 8 0 0 1-1.344 4.437L11.666 10l1.99 2.985A8 8 0 0 1 15 17.422V18a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2v-.578a8 8 0 0 1 1.344-4.437L4.334 10l-1.99-2.985A8 8 0 0 1 1 2.578V2a1 1 0 0 1-1-1Zm3 17h1.25l1.63-2.608c.98-1.567 3.26-1.567 4.24 0L11.75 18H13v-.578a6 6 0 0 0-1.008-3.328L9.93 11H6.07l-2.062 3.094A6 6 0 0 0 3 17.422V18ZM3 2h10v.578A6 6 0 0 1 12.49 5H3.51A6 6 0 0 1 3 2.578V2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default HourglassFilled;
