import * as React from "react";
import { SVGProps } from "react";

const VideoRecorderFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-.571l1.837 1.312c1.324.946 3.163 0 3.163-1.627V3.886c0-1.626-1.839-2.573-3.163-1.627L15 3.57V3a3 3 0 0 0-3-3H3Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default VideoRecorderFilled;
