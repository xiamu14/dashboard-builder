import * as React from "react";
import { SVGProps } from "react";

const TruckLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M3 14h14a3 3 0 0 0 3-3V8.708a3 3 0 0 0-.317-1.341L17.83 3.658A3 3 0 0 0 15.146 2h-1.317A3.001 3.001 0 0 0 11 0H3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Zm8-12H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9V3a1 1 0 0 0-1-1Zm3 6v4h3a1 1 0 0 0 1-1V8.708a1 1 0 0 0-.106-.447L17.764 8H14Zm2.764-2H14V4h1.146a1 1 0 0 1 .894.553L16.764 6Z" />
      <path d="M5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
  </svg>
);

export default TruckLight;
