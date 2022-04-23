import * as React from "react";
import { SVGProps } from "react";

const ZapFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.004 3.697c.447-2.52-2.73-4.004-4.376-2.045L.589 10.035c-1.366 1.627-.21 4.108 1.915 4.108h3.635a.5.5 0 0 1 .492.587l-.635 3.573c-.447 2.52 2.731 4.004 4.377 2.045l7.038-8.383c1.366-1.627.21-4.108-1.915-4.108h-3.635a.5.5 0 0 1-.492-.587l.635-3.573Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default ZapFilled;
