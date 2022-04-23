import * as React from "react";
import { SVGProps } from "react";

const EuroLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C9.129 2 6.56 4.024 5.506 7H11a1 1 0 1 1 0 2H5.053a9.315 9.315 0 0 0 0 2H11a1 1 0 1 1 0 2H5.506c1.053 2.976 3.623 5 6.494 5 1.137 0 2.212-.31 3.166-.864a1 1 0 0 1 1.005 1.728A8.262 8.262 0 0 1 12 20c-4.102 0-7.45-2.997-8.585-7H1a1 1 0 1 1 0-2h2.045a11.127 11.127 0 0 1 0-2H1a1 1 0 1 1 0-2h2.415C4.55 2.997 7.898 0 12 0c1.508 0 2.928.412 4.171 1.136a1 1 0 0 1-1.005 1.728A6.263 6.263 0 0 0 12 2Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default EuroLight;
