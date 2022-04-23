import * as React from "react";
import { SVGProps } from "react";

const FrownFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm-3.2-5.4a1 1 0 1 1-1.6-1.2A5.992 5.992 0 0 1 10 11c1.964 0 3.707.944 4.8 2.4a1 1 0 0 1-1.6 1.2A3.992 3.992 0 0 0 10 13a3.992 3.992 0 0 0-3.2 1.6ZM5.293 6.294a1 1 0 0 1 1.414 0l.5.5a1 1 0 0 1-1.414 1.414l-.5-.5a1 1 0 0 1 0-1.414Zm8 0a1 1 0 1 1 1.414 1.414l-.5.5a1 1 0 1 1-1.414-1.414l.5-.5Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FrownFilled;
