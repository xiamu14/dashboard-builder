import * as React from "react";
import { SVGProps } from "react";

const SunFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM10.995.5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM10.995 18.5a1 1 0 0 1 1 1v.997a1 1 0 1 1-2 0V19.5a1 1 0 0 1 1-1ZM.497 10.998a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM18.497 10.998a1 1 0 0 1 1-1h.997a1 1 0 1 1 0 2h-.997a1 1 0 0 1-1-1ZM3.572 18.422a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0ZM16.3 5.694a1 1 0 0 1 0-1.414l.705-.705a1 1 0 1 1 1.414 1.414l-.705.705a1 1 0 0 1-1.414 0ZM3.572 3.575a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414ZM16.3 16.303a1 1 0 0 1 1.414 0l.705.705a1 1 0 0 1-1.414 1.414l-.705-.705a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default SunFilled;
