import * as React from "react";
import { SVGProps } from "react";

const DonutChartFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M9 3c0-.552-.45-1.006-.998-.945a9 9 0 1 0 9.943 9.943c.06-.549-.393-.998-.945-.998h-3.992c-.552 0-.985.46-1.165.982a3.007 3.007 0 1 1-3.825-3.825C8.54 7.977 9 7.544 9 6.992V3Z" />
      <path d="M19 9c.552 0 1.006-.45.945-.998A9 9 0 0 0 11.998.055C11.449-.005 11 .448 11 1v3.992c0 .552.46.985.982 1.165a3.003 3.003 0 0 1 1.861 1.861c.18.522.613.982 1.165.982H19Z" />
    </g>
  </svg>
);

export default DonutChartFilled;
