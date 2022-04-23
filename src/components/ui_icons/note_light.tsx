import * as React from "react";
import { SVGProps } from "react";

const NoteLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M3 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7a1 1 0 1 1 2 0v7a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h6a1 1 0 1 1 0 2H3Z" />
      <path d="M5.064 9.664a1 1 0 0 0-.283.565l-.471 3.3a1 1 0 0 0 1.131 1.132l3.3-.472a1 1 0 0 0 .566-.283l7.542-7.542a3 3 0 1 0-4.242-4.243L5.064 9.664Zm8.25-2.593-5.186 5.186-1.65.235.236-1.65 5.185-5.185 1.415 1.414Zm1.414-1.414-1.414-1.414.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Z" />
    </g>
  </svg>
);

export default NoteLight;
