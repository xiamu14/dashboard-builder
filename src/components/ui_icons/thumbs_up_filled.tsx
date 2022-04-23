import * as React from "react";
import { SVGProps } from "react";

const ThumbsUpFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M0 10a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a2 2 0 0 1-2-2v-7ZM20.925 10.2a2.079 2.079 0 0 0-2.011-2.623l-5.468-.002a.52.52 0 0 1-.505-.645l.746-2.972A3.354 3.354 0 0 0 11.923.14a1.35 1.35 0 0 0-1.946 1.068l-.227 2.26a3.108 3.108 0 0 1-.758 1.741L6.515 8.03A2.071 2.071 0 0 0 6 9.396v7.527C6 18.07 6.934 19 8.086 19h8.04c1.41 0 2.646-.94 3.018-2.295l1.781-6.505Z" />
    </g>
  </svg>
);

export default ThumbsUpFilled;
