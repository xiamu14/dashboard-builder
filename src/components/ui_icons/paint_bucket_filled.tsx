import * as React from "react";
import { SVGProps } from "react";

const PaintBucketFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M20.568 15.026a3.06 3.06 0 1 1-4.78 0l.003-.003a72.192 72.192 0 0 1 1.884-2.428.646.646 0 0 1 1.007 0c.55.672 1.178 1.482 1.888 2.431h-.002ZM9.975.575a1 1 0 0 0-1.414 0L6.439 2.697l3.3 3.3A2 2 0 1 1 8.325 7.41l-3.3-3.3L6.44 2.697 4.318.575A1 1 0 1 0 2.904 1.99L5.025 4.11 1.49 7.646a3 3 0 0 0 0 4.243l4.95 4.95a3 3 0 0 0 4.242 0l7.071-7.071a1 1 0 0 0 0-1.414L9.975.575Z" />
    </g>
  </svg>
);

export default PaintBucketFilled;
