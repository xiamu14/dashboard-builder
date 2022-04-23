import * as React from "react";
import { SVGProps } from "react";

const ShowFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.398 8.133C18.21 10.115 15.215 14 10 14S1.79 10.115.602 8.133a2.186 2.186 0 0 1 0-2.266C1.79 3.885 4.785 0 10 0s8.21 3.885 9.398 5.867a2.186 2.186 0 0 1 0 2.266ZM10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ShowFilled;
