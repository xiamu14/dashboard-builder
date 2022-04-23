import * as React from "react";
import { SVGProps } from "react";

const LayersFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M1.058 9.395a1 1 0 0 1 1.277-.607l7.995 2.842a2 2 0 0 0 1.34 0l7.995-2.842a1 1 0 0 1 .67 1.884l-7.995 2.843a4 4 0 0 1-2.68 0l-7.995-2.843a1 1 0 0 1-.607-1.277Z" />
      <path d="M1.058 13.645a1 1 0 0 1 1.277-.607l7.995 2.842a2 2 0 0 0 1.34 0l7.995-2.842a1 1 0 0 1 .67 1.884l-7.995 2.843a4 4 0 0 1-2.68 0l-7.995-2.843a1 1 0 0 1-.607-1.277Z" />
      <path
        d="M12.709.307a5 5 0 0 0-3.418 0L2.243 2.87c-1.756.639-1.756 3.121 0 3.76L9.29 9.193a5 5 0 0 0 3.418 0l7.048-2.563c1.756-.639 1.756-3.121 0-3.76L12.71.307Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default LayersFilled;
