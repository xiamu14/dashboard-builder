import * as React from "react";
import { SVGProps } from "react";

const HomeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.993 7.106A3 3 0 0 0 0 9.336V17a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9.336a3 3 0 0 0-.993-2.23l-7-6.3a3 3 0 0 0-4.014 0l-7 6.3ZM9 11a2 2 0 0 0-2 2v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a2 2 0 0 0-2-2H9Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default HomeFilled;
