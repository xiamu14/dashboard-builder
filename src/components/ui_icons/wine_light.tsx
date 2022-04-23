import * as React from "react";
import { SVGProps } from "react";

const WineLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.862 0h8.276a2 2 0 0 1 1.995 1.858l.368 5.16A6.52 6.52 0 0 1 8 13.924v2.729a1 1 0 0 0 .836.986l1.328.222a1 1 0 0 1 .836.986V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.153a1 1 0 0 1 .836-.986l1.328-.222A1 1 0 0 0 6 16.653v-2.729A6.52 6.52 0 0 1 .499 7.018l.368-5.16A2 2 0 0 1 2.862 0Zm8.276 2H2.862L2.72 4h8.562l-.143-2Zm.285 4H2.577l-.083 1.16a4.518 4.518 0 1 0 9.012 0L11.423 6Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default WineLight;
