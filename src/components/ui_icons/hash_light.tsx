import * as React from "react";
import { SVGProps } from "react";

const HashLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.798.046a1 1 0 0 1 .656 1.252L8.61 4h5.905l1.03-3.298a1 1 0 0 1 1.91.596L16.61 4h1.89a1 1 0 1 1 0 2h-2.515l-1.875 6h2.39a1 1 0 0 1 0 2h-3.015l-1.03 3.298a1 1 0 1 1-1.91-.596L11.39 14H5.485l-1.03 3.298a1 1 0 1 1-1.91-.596L3.39 14H1.5a1 1 0 1 1 0-2h2.515L5.89 6H3.5a1 1 0 1 1 0-2h3.015L7.545.702A1 1 0 0 1 8.799.046ZM12.015 12l1.875-6H7.985L6.11 12h5.905Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default HashLight;
