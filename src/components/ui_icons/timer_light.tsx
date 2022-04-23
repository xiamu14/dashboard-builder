import * as React from "react";
import { SVGProps } from "react";

const TimerLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M2.771 2.474c-.288-.47-.906-.621-1.348-.291a11 11 0 0 0-1.108.947c-.395.385-.342 1.019.078 1.377.419.358 1.045.303 1.448-.074.202-.19.413-.37.632-.54.435-.339.587-.95.298-1.42ZM13.229 2.474c.288-.47.906-.621 1.348-.291a11 11 0 0 1 1.108.947c.395.385.342 1.019-.078 1.377-.419.358-1.045.303-1.448-.074a9.002 9.002 0 0 0-.632-.54c-.435-.339-.587-.95-.298-1.42ZM11.207 9.207a1 1 0 0 0-1.414-1.414L8.518 9.068A2.003 2.003 0 0 0 6 11a2 2 0 1 0 3.932-.518l1.275-1.275Z"
        fillRule="nonzero"
      />
      <path d="M6 0a1 1 0 0 0 0 2h1v1.062A8.001 8.001 0 0 0 8 19 8 8 0 0 0 9 3.062V2h1a1 1 0 1 0 0-2H6Zm2 17A6 6 0 1 0 8 5a6 6 0 0 0 0 12Z" />
    </g>
  </svg>
);

export default TimerLight;
