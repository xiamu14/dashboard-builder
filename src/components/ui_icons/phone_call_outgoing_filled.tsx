import * as React from "react";
import { SVGProps } from "react";

const PhoneCallOutgoingFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M.49 6.709C-.611 4.495.5 2.05 2.623.779a2.306 2.306 0 0 1 3.046.613l1.562 2.13a3 3 0 0 1 .264 3.116l-.41.82a.822.822 0 0 0-.015.747c.22.43.691 1.191 1.598 2.098.907.907 1.669 1.378 2.098 1.599.236.121.51.102.748-.016l.82-.41a3 3 0 0 1 3.115.264l2.13 1.563a2.306 2.306 0 0 1 .614 3.045c-1.272 2.122-3.716 3.235-5.93 2.132-1.866-.93-4.251-2.47-6.777-4.995C2.96 10.96 1.421 8.575.491 6.71ZM14 1.5a1 1 0 0 0 0 2h1.086l-2.793 2.793a1 1 0 0 0 1.414 1.414L16.5 4.914V6a1 1 0 0 0 2 0V3.5a2 2 0 0 0-2-2H14Z" />
    </g>
  </svg>
);

export default PhoneCallOutgoingFilled;
