import * as React from "react";
import { SVGProps } from "react";

const MusicLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 4.342a3 3 0 0 1 2.272-2.91l2.112-.528a2.91 2.91 0 0 1 1.412 5.647L8 7.5V15a4 4 0 1 1-2-3.465V4.342Zm2.757-.97 2.112-.528a.91.91 0 1 1 .441 1.767L8 5.438V4.342a1 1 0 0 1 .757-.97ZM4 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default MusicLight;
