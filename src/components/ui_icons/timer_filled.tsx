import * as React from "react";
import { SVGProps } from "react";

const TimerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M2.771 2.474c-.288-.47-.906-.621-1.348-.291a11 11 0 0 0-1.108.947c-.395.385-.342 1.019.078 1.377.419.358 1.045.303 1.448-.074.202-.19.413-.37.632-.54.435-.339.587-.95.298-1.42ZM13.229 2.474c.288-.47.906-.621 1.348-.291a11 11 0 0 1 1.108.947c.395.385.342 1.019-.078 1.377-.419.358-1.045.303-1.448-.074a9.002 9.002 0 0 0-.632-.54c-.435-.339-.587-.95-.298-1.42Z"
        fillRule="nonzero"
      />
      <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H9v1.062A8.001 8.001 0 0 1 8 19 8 8 0 0 1 7 3.062V2H6a1 1 0 0 1-1-1Zm6.707 6.293a1 1 0 0 1 0 1.414l-1.775 1.775A2.002 2.002 0 0 1 8 13a2 2 0 1 1 .518-3.932l1.775-1.775a1 1 0 0 1 1.414 0Z" />
    </g>
  </svg>
);

export default TimerFilled;
