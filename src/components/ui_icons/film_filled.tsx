import * as React from "react";
import { SVGProps } from "react";

const FilmFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12ZM14 2.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V4a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 14 4V2.5ZM16 4a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 18 4V3a1 1 0 0 0-1-1h-.5a.5.5 0 0 0-.5.5V4ZM2 4a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 4 4V2.5a.5.5 0 0 0-.5-.5H3a1 1 0 0 0-1 1v1Zm4 0a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 9 4V2.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V4Zm-3.5 9.5a.5.5 0 0 0-.5.5v1a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5V14a.5.5 0 0 0-.5-.5h-1Zm4 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14a.5.5 0 0 0-.5-.5h-2Zm5 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14a.5.5 0 0 0-.5-.5h-2Zm5 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1v-1a.5.5 0 0 0-.5-.5h-1Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FilmFilled;
