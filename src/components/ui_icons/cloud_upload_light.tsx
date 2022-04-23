import * as React from "react";
import { SVGProps } from "react";

const CloudUploadLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M7.707 13.707a1 1 0 0 1-1.414-1.414l3-3A.997.997 0 0 1 9.997 9h.006a.997.997 0 0 1 .704.293l3 3a1 1 0 0 1-1.414 1.414L11 12.414V18a1 1 0 1 1-2 0v-5.586l-1.293 1.293Z" />
      <path d="M6.562 4.249a7 7 0 1 1 11.105 7.968 1 1 0 1 1-1.334-1.49 5 5 0 1 0-8.202-4.869 1 1 0 0 1-1.514.614A3 3 0 1 0 3.501 11.6a1 1 0 1 1-1.002 1.731 5 5 0 0 1 4.062-9.082Z" />
    </g>
  </svg>
);

export default CloudUploadLight;
