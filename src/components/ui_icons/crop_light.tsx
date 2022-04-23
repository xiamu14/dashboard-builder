import * as React from "react";
import { SVGProps } from "react";

const CropLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 1a1 1 0 0 0-2 0v2H1a1 1 0 0 0 0 2h2v9a3 3 0 0 0 3 3h9v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V6a3 3 0 0 0-3-3H5V1Zm0 4v9a1 1 0 0 0 1 1h9V6a1 1 0 0 0-1-1H5Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CropLight;
