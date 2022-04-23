import * as React from "react";
import { SVGProps } from "react";

const PhoneFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.183 7.01c-1.104-2.215.01-4.658 2.131-5.931a2.306 2.306 0 0 1 3.046.613l1.562 2.131a3 3 0 0 1 .264 3.116l-.41.82a.822.822 0 0 0-.015.747c.22.43.691 1.191 1.598 2.098.907.907 1.668 1.377 2.098 1.598.236.122.51.103.748-.016l.819-.41a3 3 0 0 1 3.116.265l2.13 1.562a2.306 2.306 0 0 1 .614 3.046c-1.273 2.121-3.716 3.235-5.93 2.131-1.867-.93-4.251-2.469-6.777-4.994-2.525-2.526-4.064-4.91-4.994-6.777Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default PhoneFilled;
