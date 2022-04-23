import * as React from "react";
import { SVGProps } from "react";

const PrivacyFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 5.662a3 3 0 0 1 2.051-2.846l6-2a3 3 0 0 1 1.898 0l6 2A3 3 0 0 1 18 5.662V11c0 5.502-5.56 8.842-7.94 10.02a2.377 2.377 0 0 1-2.12 0C5.56 19.841 0 16.501 0 11V5.662ZM12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-3 5c1.794 0 3.431.675 4.67 1.785a.856.856 0 0 1 .03 1.239l-.184.186c-1.473 1.457-3.246 2.474-4.343 3.017a.377.377 0 0 1-.346 0c-1.097-.543-2.87-1.56-4.343-3.017a12.124 12.124 0 0 1-.184-.186.856.856 0 0 1 .03-1.239A6.974 6.974 0 0 1 9 13Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default PrivacyFilled;
