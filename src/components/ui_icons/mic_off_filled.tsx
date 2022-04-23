import * as React from "react";
import { SVGProps } from "react";

const MicOffFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M13.737 12.322A5 5 0 0 1 5 9a1 1 0 0 0-2 0 7.002 7.002 0 0 0 6 6.93V18H7a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.07a6.985 6.985 0 0 0 4.153-2.193l-1.416-1.415ZM16.3 12.055c.448-.923.7-1.96.7-3.055a1 1 0 1 0-2 0c0 .53-.082 1.04-.235 1.52l1.535 1.535Z" />
      </g>
      <g fillRule="nonzero">
        <path d="M7 5.584V9a3 3 0 0 0 5.32 1.903L7 5.584ZM13 8.756V3a3 3 0 0 0-5.99-.235L13 8.755Z" />
      </g>
      <path d="M.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default MicOffFilled;
