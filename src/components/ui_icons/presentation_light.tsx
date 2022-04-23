import * as React from "react";
import { SVGProps } from "react";

const PresentationLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M1 0a1 1 0 1 0 0 2v9a3 3 0 0 0 3 3h6v.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L10 17.414V18a1 1 0 1 0 2 0v-.586l2.293 2.293a1 1 0 0 0 1.414-1.414L12 14.586V14h6a3 3 0 0 0 3-3V2a1 1 0 1 0 0-2H1Zm18 2H3v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2Z" />
      <path d="M8 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM13 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1ZM13 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default PresentationLight;
