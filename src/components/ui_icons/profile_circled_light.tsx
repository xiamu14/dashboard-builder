import * as React from "react";
import { SVGProps } from "react";

const ProfileCircledLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M10 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M16.559 17.549A9.976 9.976 0 0 0 20 10c0-5.523-4.477-10-10-10S0 4.477 0 10a9.977 9.977 0 0 0 3.441 7.549A9.961 9.961 0 0 0 10 20a9.96 9.96 0 0 0 6.559-2.451Zm-6.301.447A8.181 8.181 0 0 1 10 18h-.026a8 8 0 0 1-3.937-1.05A4.993 4.993 0 0 1 10 15c1.612 0 3.048.763 3.963 1.95a7.957 7.957 0 0 1-3.705 1.046Zm5.304-2.246A6.988 6.988 0 0 0 10 13a6.988 6.988 0 0 0-5.562 2.75 8 8 0 1 1 11.125 0Z" />
    </g>
  </svg>
);

export default ProfileCircledLight;
