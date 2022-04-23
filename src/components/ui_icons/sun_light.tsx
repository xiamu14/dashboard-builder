import * as React from "react";
import { SVGProps } from "react";

const SunLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-4a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM9.995 0a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM9.995 17a1 1 0 0 1 1 1v.996a1 1 0 0 1-2 0V18a1 1 0 0 1 1-1ZM2.925 2.928a1 1 0 0 1 1.415 0l.864.865A1 1 0 0 1 3.79 5.207l-.865-.864a1 1 0 0 1 0-1.415ZM14.793 14.796a1 1 0 0 1 1.414 0l.858.858a1 1 0 0 1-1.414 1.414l-.858-.858a1 1 0 0 1 0-1.414ZM-.003 9.998a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1ZM16.997 9.998a1 1 0 0 1 1-1h.996a1 1 0 0 1 0 2h-.996a1 1 0 0 1-1-1ZM2.925 17.068a1 1 0 0 1 0-1.414l.861-.861A1 1 0 1 1 5.2 16.207l-.86.861a1 1 0 0 1-1.415 0ZM14.786 5.207a1 1 0 0 1 0-1.414l.865-.865a1 1 0 0 1 1.414 1.415l-.864.864a1 1 0 0 1-1.415 0Z" />
    </g>
  </svg>
);

export default SunLight;
