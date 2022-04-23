import * as React from "react";
import { SVGProps } from "react";

const TagLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="m2.686 10.268 7.51-7.51a1 1 0 0 1 .784-.29l5.252.404a1 1 0 0 1 .92.92l.405 5.253a1 1 0 0 1-.29.784l-7.51 7.51a1 1 0 0 1-1.414 0l-5.657-5.657a1 1 0 0 1 0-1.414Zm16.865-1.376a3 3 0 0 1-.87 2.351l-7.51 7.51a3 3 0 0 1-4.242 0l-5.657-5.657a3 3 0 0 1 0-4.242l7.51-7.51a3 3 0 0 1 2.351-.87l5.253.404a3 3 0 0 1 2.761 2.761l.404 5.253Z" />
      <path
        d="M12.586 5.318a1.5 1.5 0 1 0 2.121 2.121 1.5 1.5 0 0 0-2.121-2.121Z"
        fillRule="nonzero"
      />
      <path d="m5.515 11.682 2.828 2.828a1 1 0 1 0 1.414-1.414L6.93 10.268a1 1 0 0 0-1.414 1.414Z" />
    </g>
  </svg>
);

export default TagLight;
