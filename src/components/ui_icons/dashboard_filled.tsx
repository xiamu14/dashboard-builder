import * as React from "react";
import { SVGProps } from "react";

const DashboardFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 17"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10c0 2.18-.698 4.198-1.883 5.842-.338.47-.898.714-1.477.714H3.36c-.579 0-1.139-.245-1.477-.714A9.955 9.955 0 0 1 0 10Zm14.707-4.707a1 1 0 0 1 0 1.414l-2.775 2.775a2 2 0 1 1-1.414-1.414l2.775-2.775a1 1 0 0 1 1.414 0Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default DashboardFilled;
