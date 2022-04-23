import * as React from "react";
import { SVGProps } from "react";

const FlightFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.5 13v-1.764A2.5 2.5 0 0 1 1.882 9l5.342-2.67a.5.5 0 0 0 .276-.448V2.5a2.5 2.5 0 0 1 5 0v3.382a.5.5 0 0 0 .276.447L18.118 9a2.5 2.5 0 0 1 1.382 2.236V13a.5.5 0 0 1-.646.478l-6.031-1.836a.25.25 0 0 0-.323.239V14.5a.5.5 0 0 0 .2.4l1.2.9c.378.283.6.728.6 1.2v2.5a.5.5 0 0 1-.724.447L10 18.06l-3.776 1.888A.5.5 0 0 1 5.5 19.5V17a1.5 1.5 0 0 1 .6-1.2l1.2-.9a.5.5 0 0 0 .2-.4v-2.62a.25.25 0 0 0-.323-.238l-6.031 1.836A.5.5 0 0 1 .5 13Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FlightFilled;
