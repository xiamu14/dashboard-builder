import * as React from "react";
import { SVGProps } from "react";

const ThumbsDownFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M0 9.5a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H2a2 2 0 0 0-2 2v7ZM20.925 9.3a2.079 2.079 0 0 1-2.011 2.623l-5.468.002a.52.52 0 0 0-.505.645l.746 2.972a3.354 3.354 0 0 1-1.764 3.818 1.35 1.35 0 0 1-1.946-1.068l-.227-2.26a3.108 3.108 0 0 0-.758-1.741l-2.477-2.82A2.071 2.071 0 0 1 6 10.104V2.577C6 1.43 6.934.5 8.086.5h8.04c1.41 0 2.646.94 3.018 2.295L20.925 9.3Z" />
    </g>
  </svg>
);

export default ThumbsDownFilled;
