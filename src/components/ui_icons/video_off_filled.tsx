import * as React from "react";
import { SVGProps } from "react";

const VideoOffFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M4.416 3H3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-.416L4.416 3ZM19.056 14.812c.552-.342.944-.948.944-1.698V6.886c0-1.626-1.839-2.573-3.163-1.627L15 6.57V6a3 3 0 0 0-3-3H7.244l11.812 11.812Z" />
      </g>
      <path d="M.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default VideoOffFilled;
