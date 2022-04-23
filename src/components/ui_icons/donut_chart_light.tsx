import * as React from "react";
import { SVGProps } from "react";

const DonutChartLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M7 4.292A7 7 0 1 0 15.708 13h-2.117A5.009 5.009 0 1 1 7 6.409V4.292Zm1.002-2.237C8.551 1.995 9 2.448 9 3v3.992c0 .552-.46.985-.982 1.165a3.007 3.007 0 1 0 3.825 3.825c.18-.522.613-.982 1.165-.982H17c.552 0 1.006.45.944.998a9 9 0 1 1-9.942-9.943Z" />
      <path d="M17.708 7A7.002 7.002 0 0 0 13 2.292v2.117A5.008 5.008 0 0 1 15.591 7h2.117Zm2.236 1.002c.062.549-.392.998-.944.998h-3.992c-.552 0-.985-.46-1.165-.982a3.004 3.004 0 0 0-1.861-1.861C11.46 5.977 11 5.544 11 4.992V1c0-.552.45-1.006.998-.945a9 9 0 0 1 7.946 7.947Z" />
    </g>
  </svg>
);

export default DonutChartLight;
