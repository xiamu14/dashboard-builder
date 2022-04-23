import * as React from "react";
import { SVGProps } from "react";

const TrainLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fillRule="nonzero"
      />
      <path d="M5.236 20a1 1 0 0 0-.894.553l-.448.894a1 1 0 1 1-1.788-.894l.447-.895A3 3 0 0 1 5.236 18h7.528a3 3 0 0 1 2.683 1.658l.447.895a1 1 0 1 1-1.788.894l-.448-.894a1 1 0 0 0-.894-.553H5.236ZM12 1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-3Zm3 2H3a1 1 0 0 0-1 1v4h14V4a1 1 0 0 0-1-1Zm1 7H2v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4Z" />
    </g>
  </svg>
);

export default TrainLight;
