import * as React from "react";
import { SVGProps } from "react";

const NoteFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M3 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7a1 1 0 1 1 2 0v7a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h6a1 1 0 1 1 0 2H3Z" />
      <g fillRule="nonzero">
        <path d="M16.496 1.768a2.5 2.5 0 0 0-3.536 0l-.707.707a.5.5 0 0 0 0 .707l3.536 3.536a.5.5 0 0 0 .707 0l.707-.708a2.5 2.5 0 0 0 0-3.535l-.707-.707ZM10.839 4.596a.5.5 0 0 0-.707 0L5.064 9.664a1 1 0 0 0-.283.565l-.471 3.3a1 1 0 0 0 1.131 1.132l3.3-.472a1 1 0 0 0 .566-.283l5.067-5.067a.5.5 0 0 0 0-.707L10.84 4.596Z" />
      </g>
    </g>
  </svg>
);

export default NoteFilled;
