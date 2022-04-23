import * as React from "react";
import { SVGProps } from "react";

const FlashlightFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M2.812 10.85a.5.5 0 0 1 .188.39V18a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-6.76a.5.5 0 0 1 .188-.39l1.561-1.25A2 2 0 0 0 13.5 8.04V7a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v1.039A2 2 0 0 0 1.25 9.6l1.562 1.25ZM8 13a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0v-2ZM7 .5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1ZM1.053 1.606a1 1 0 0 1 1.341.447l.5 1a1 1 0 0 1-1.788.894l-.5-1a1 1 0 0 1 .447-1.341ZM12.947 1.606a1 1 0 0 1 .447 1.341l-.5 1a1 1 0 0 1-1.788-.894l.5-1a1 1 0 0 1 1.341-.447Z" />
    </g>
  </svg>
);

export default FlashlightFilled;
