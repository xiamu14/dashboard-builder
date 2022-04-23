import * as React from "react";
import { SVGProps } from "react";

const PlaylistLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 12a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Z" />
      <path d="M12 4.342a3 3 0 0 1 2.272-2.91l2.112-.528a2.91 2.91 0 0 1 1.412 5.647L14 7.5V15a4 4 0 1 1-2-3.465V4.342Zm2.757-.97 2.112-.528a.91.91 0 1 1 .441 1.767L14 5.438V4.342a1 1 0 0 1 .757-.97ZM10 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
    </g>
  </svg>
);

export default PlaylistLight;
