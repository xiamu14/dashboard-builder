import * as React from "react";
import { SVGProps } from "react";

const NotesFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 10h1v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3Zm10-8H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1V7a3 3 0 0 1 3-3h7V3a1 1 0 0 0-1-1Zm-1 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default NotesFilled;
