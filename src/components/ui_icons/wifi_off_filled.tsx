import * as React from "react";
import { SVGProps } from "react";

const WifiOffFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M13 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12.6 10.184a7.017 7.017 0 0 0-6.556 1.873 1 1 0 0 0 1.416 1.412A4.981 4.981 0 0 1 11 12c1.383 0 2.634.56 3.54 1.469a1 1 0 0 0 1.38.035l-3.32-3.32Z"
        fillRule="nonzero"
      />
      <g fillRule="nonzero">
        <path d="M8.664 6.249a10.983 10.983 0 0 0-5.437 2.967 1 1 0 1 0 1.413 1.416 8.967 8.967 0 0 1 5.793-2.614l-1.769-1.77ZM13.636 8.392a8.994 8.994 0 0 1 3.724 2.24 1 1 0 1 0 1.413-1.416 10.968 10.968 0 0 0-7.526-3.213l2.39 2.389Z" />
      </g>
      <g fillRule="nonzero">
        <path d="M5.469 3.053A15.019 15.019 0 0 0 .392 6.394a1 1 0 1 0 1.415 1.414 12.995 12.995 0 0 1 5.225-3.192L5.47 3.053ZM9.348 4.104C9.89 4.035 10.44 4 11 4c3.59 0 6.84 1.454 9.193 3.808a1 1 0 1 0 1.415-1.414A14.956 14.956 0 0 0 11 2c-1.16 0-2.29.132-3.374.381l1.722 1.723Z" />
      </g>
      <path d="M1.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default WifiOffFilled;
