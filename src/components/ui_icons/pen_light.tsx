import * as React from "react";
import { SVGProps } from "react";

const PenLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m6.269.283-4.78 5.121a3 3 0 0 0-.429 3.504l2.83 5.094A3 3 0 0 0 4 20h6a3 3 0 0 0 .11-5.998l2.83-5.094a3 3 0 0 0-.43-3.504L7.732.284a1 1 0 0 0-1.462 0ZM2.951 6.77 6 3.503v2.765a2 2 0 1 0 2 0V3.503l3.048 3.266a1 1 0 0 1 .144 1.168L7.823 14H6.177L2.808 7.937a1 1 0 0 1 .143-1.168ZM3 17a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default PenLight;
