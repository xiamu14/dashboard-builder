import * as React from "react";
import { SVGProps } from "react";

const TwitchLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M4 15a2 2 0 0 1 2 2v.01l1.377-1.24A3 3 0 0 1 9.384 15h2.78a1 1 0 0 0 .743-.331l2.836-3.151a1 1 0 0 0 .257-.67V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1ZM3 0a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h1v2.255c0 .865 1.025 1.322 1.669.743l3.046-2.741A1 1 0 0 1 9.384 17h2.78a3 3 0 0 0 2.23-.993l2.836-3.151a3 3 0 0 0 .77-2.007V3a3 3 0 0 0-3-3H3Z" />
      <path d="M7 5a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1ZM12 5a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default TwitchLight;
