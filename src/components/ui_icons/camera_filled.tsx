import * as React from "react";
import { SVGProps } from "react";

const CameraFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 5a3 3 0 0 1 3-3h2.191a.5.5 0 0 0 .447-.276l.171-.342A2.5 2.5 0 0 1 8.045 0h3.91a2.5 2.5 0 0 1 2.236 1.382l.17.342A.5.5 0 0 0 14.81 2H17a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5Zm10 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CameraFilled;
