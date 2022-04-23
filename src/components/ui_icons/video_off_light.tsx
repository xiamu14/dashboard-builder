import * as React from "react";
import { SVGProps } from "react";

const VideoOffLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M4.416 3H3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-.416l-2-2V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.416l-2-2ZM13 8.756V6a1 1 0 0 0-1-1H9.244l-2-2H12a3 3 0 0 1 3 3v.571l1.837-1.312c1.324-.946 3.163 0 3.163 1.627v6.228c0 .75-.392 1.356-.944 1.698L18 13.756v-6.87L15 9.03v1.727l-2-2Z" />
      </g>
      <path d="M.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default VideoOffLight;
