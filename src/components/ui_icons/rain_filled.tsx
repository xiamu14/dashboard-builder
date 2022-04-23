import * as React from "react";
import { SVGProps } from "react";

const RainFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M14.75 12.17a1 1 0 0 1 .586 1.288l-1.5 4a1 1 0 0 1-1.873-.702l1.5-4a1 1 0 0 1 1.288-.585ZM6.75 12.17a1 1 0 0 1 .586 1.288l-1.5 4a1 1 0 1 1-1.873-.702l1.5-4a1 1 0 0 1 1.288-.585ZM10.75 12.17a1 1 0 0 1 .586 1.288l-1.5 4a1 1 0 1 1-1.873-.702l1.5-4a1 1 0 0 1 1.288-.585Z" />
      <path
        d="M16.804 12.423c.052.18.265.277.414.164A7 7 0 1 0 6.562 4.249 5 5 0 0 0 3.037 13.6a.464.464 0 0 0 .611-.28l.41-1.09a2.5 2.5 0 0 1 4.123-.877.31.31 0 0 0 .435 0 2.5 2.5 0 0 1 3.565 0 .31.31 0 0 0 .435 0 2.5 2.5 0 0 1 4.187 1.07Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default RainFilled;
