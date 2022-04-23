import * as React from "react";
import { SVGProps } from "react";

const VolumeOffLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M6.416 5H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2l4.683 4.098C12.976 20.229 15 19.31 15 17.592v-4.008l-2-2v6.008l-4.683-4.097A2 2 0 0 0 7 13H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2a2 2 0 0 0 1.092-.324L6.416 5ZM13 8.756V2.408L9.614 5.37 8.197 3.953l3.486-3.05C12.976-.23 15 .688 15 2.407v8.348l-2-2Z" />
      </g>
      <path d="M.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default VolumeOffLight;
