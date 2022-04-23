import * as React from "react";
import { SVGProps } from "react";

const HeartFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.8 2.214a5.674 5.674 0 0 0-8.126 0c-2.232 2.274-2.232 5.954 0 8.228l6.898 7.03a2 2 0 0 0 2.856 0l6.898-7.03c2.232-2.274 2.232-5.954 0-8.228a5.674 5.674 0 0 0-8.126 0 .28.28 0 0 1-.4 0Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default HeartFilled;
