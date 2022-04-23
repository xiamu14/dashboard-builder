import * as React from "react";
import { SVGProps } from "react";

const HandCursorLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.515 9.94A2 2 0 0 1 10 8V2.993a.993.993 0 0 0-1.986 0V12a2 2 0 0 1-3.662 1.112L3.26 11.48a.576.576 0 0 0-.993.579l2.704 5.39a1 1 0 0 0 .894.551H17a1 1 0 0 0 1-1v-4.658a1 1 0 0 0-.757-.97L11.515 9.94Zm-7.501-.408C2.69 8.812.874 9.377.338 10.986a2.576 2.576 0 0 0 .141 1.97l2.705 5.39A3 3 0 0 0 5.865 20H17a3 3 0 0 0 3-3v-4.658a3 3 0 0 0-2.272-2.91L12 8V2.993a2.993 2.993 0 1 0-5.986 0V12l-1.092-1.632a2.565 2.565 0 0 0-.908-.836Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default HandCursorLight;
