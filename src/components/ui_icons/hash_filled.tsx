import * as React from "react";
import { SVGProps } from "react";

const HashFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.298.046a1 1 0 0 1 .656 1.252L8.11 4h5.905l1.03-3.298a1 1 0 0 1 1.91.596L16.11 4H18a1 1 0 1 1 0 2h-2.515l-1.875 6H16a1 1 0 0 1 0 2h-3.015l-1.03 3.298a1 1 0 1 1-1.91-.596L10.89 14H4.985l-1.03 3.298a1 1 0 1 1-1.91-.596L2.89 14H1a1 1 0 1 1 0-2h2.515L5.39 6H3a1 1 0 1 1 0-2h3.015L7.045.702A1 1 0 0 1 8.299.046ZM11.515 12l1.875-6H7.485L5.61 12h5.905Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default HashFilled;
