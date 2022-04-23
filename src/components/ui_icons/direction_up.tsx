import * as React from "react";
import { SVGProps } from "react";

const DirectionUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M.44 8.44a1.5 1.5 0 0 0 2.12 2.12L.44 8.44ZM9 2 10.06.94a1.5 1.5 0 0 0-2.12 0L9 2Zm6.44 8.56a1.5 1.5 0 0 0 2.12-2.12l-2.12 2.12Zm-12.88 0 7.5-7.5L7.94.94l-7.5 7.5 2.12 2.12Zm5.38-7.5 7.5 7.5 2.12-2.12-7.5-7.5-2.12 2.12Z" />
      <path d="M7.5 20a1.5 1.5 0 1 0 3 0h-3Zm3-18a1.5 1.5 0 1 0-3 0h3Zm0 18V2h-3v18h3Z" />
    </g>
  </svg>
);

export default DirectionUp;
