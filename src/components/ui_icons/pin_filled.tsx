import * as React from "react";
import { SVGProps } from "react";

const PinFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 12.676V13a1 1 0 0 1-1 1H7v5a1 1 0 1 1-2 0v-5H1a1 1 0 0 1-1-1v-.324a5 5 0 0 1 2.226-4.16l.329-.22A1 1 0 0 0 3 7.466V5.85a1 1 0 0 0-.22-.625L1.22 3.274A1 1 0 0 1 1 2.649V1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.65a1 1 0 0 1-.22.624L9.22 5.226a1 1 0 0 0-.22.625v1.614a1 1 0 0 0 .445.832l.329.219A5 5 0 0 1 12 12.676Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default PinFilled;
