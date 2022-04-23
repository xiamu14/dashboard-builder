import * as React from "react";
import { SVGProps } from "react";

const TargetLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path d="M10 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path
        d="M14.784 2.216A9.955 9.955 0 0 0 10 1C4.477 1 0 5.477 0 11s4.477 10 10 10 10-4.477 10-10c0-1.733-.44-3.363-1.216-4.784l-.93.93a1 1 0 0 1-.688.293 8 8 0 1 1-3.605-3.605 1 1 0 0 1 .293-.688l.93-.93Z"
        fillRule="nonzero"
      />
      <path d="M16.085.914a1 1 0 0 1 1.697.565L18 3l1.52.217a1 1 0 0 1 .566 1.697l-2.232 2.232a1 1 0 0 1-.849.283l-1.769-.252-.029.03-4.5 4.5a1 1 0 0 1-1.414-1.414l4.5-4.5.03-.03-.252-1.768a1 1 0 0 1 .282-.849L16.085.914Zm-.464 3.293.506-.506c.202.541.63.97 1.172 1.172l-.506.506-1.025-.147-.147-1.025Z" />
    </g>
  </svg>
);

export default TargetLight;
