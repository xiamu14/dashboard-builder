import * as React from "react";
import { SVGProps } from "react";

const CameraLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path d="M15 4a2 2 0 0 1-1.789-1.106l-.17-.341A1 1 0 0 0 12.145 2H7.854a1 1 0 0 0-.894.553l-.171.341A2 2 0 0 1 5 4H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2Zm0-2-.17-.342A3 3 0 0 0 12.145 0H7.854a3 3 0 0 0-2.683 1.658L5 2H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-2Z" />
      <path d="M16.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fillRule="nonzero" />
    </g>
  </svg>
);

export default CameraLight;
