import * as React from "react";
import { SVGProps } from "react";

const MicOffLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M13.737 12.322A5 5 0 0 1 5 9a1 1 0 0 0-2 0 7.002 7.002 0 0 0 6 6.93V18H7a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.07a6.986 6.986 0 0 0 4.153-2.192l-1.416-1.416ZM16.3 12.055c.448-.923.7-1.96.7-3.055a1 1 0 1 0-2 0c0 .53-.082 1.041-.235 1.52l1.535 1.535Z" />
      </g>
      <g fillRule="nonzero">
        <path d="M7 5.584V9a3 3 0 0 0 5.32 1.903l-1.436-1.435A1 1 0 0 1 9 9V7.584l-2-2ZM11 6.756V3a1 1 0 0 0-2 0v1.756L7.01 2.765A3 3 0 0 1 13 3v5.756l-2-2Z" />
      </g>
      <path d="M.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default MicOffLight;
