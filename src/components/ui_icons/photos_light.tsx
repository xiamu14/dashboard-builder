import * as React from "react";
import { SVGProps } from "react";

const PhotosLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M4 4H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1h-2v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V4Z"
        fillRule="nonzero"
      />
      <path d="M4 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V3Zm3-1h10a1 1 0 0 1 1 1v10a.995.995 0 0 1-.205.606c-.03-.04-.063-.08-.1-.12L11.32 6.53a3 3 0 0 0-4.516.106L6 7.6V3a1 1 0 0 1 1-1Zm-1 8.724V13a1 1 0 0 0 1 1h8.453L9.845 7.881a1 1 0 0 0-1.506.036L6 10.724Z" />
      <path
        d="M16 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default PhotosLight;
