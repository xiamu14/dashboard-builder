import * as React from "react";
import { SVGProps } from "react";

const CloudDownloadFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M14.741 13.57c.138.099.311.14.472.087A7.01 7.01 0 0 0 20 7.007 7.004 7.004 0 0 0 13 0a7.002 7.002 0 0 0-6.439 4.253A5.003 5.003 0 0 0 0 9.009a5.004 5.004 0 0 0 4.533 4.984.52.52 0 0 0 .4-.153c.434-.41.984-.684 1.57-.784.272-.047.497-.267.497-.543V11.01a3.002 3.002 0 0 1 3-3.003c1.657 0 3 1.345 3 3.003v1.502c0 .276.225.496.498.542.44.073.865.245 1.243.515Z"
        fillRule="nonzero"
      />
      <path d="M7.707 15.293a1 1 0 0 0-1.414 1.414l3 3c.194.195.45.292.704.293h.006a.997.997 0 0 0 .704-.293l3-3a1 1 0 0 0-1.414-1.414L11 16.586V11a1 1 0 1 0-2 0v5.586l-1.293-1.293Z" />
    </g>
  </svg>
);

export default CloudDownloadFilled;
