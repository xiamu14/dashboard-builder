import * as React from "react";
import { SVGProps } from "react";

const VideoRecorderLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 10.429V11a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v.571l1.837-1.312c1.324-.946 3.163 0 3.163 1.627v6.228c0 1.626-1.839 2.573-3.163 1.627L15 10.43ZM3 2h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm12 5.97 3 2.144V3.886L15 6.03v1.942Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default VideoRecorderLight;
