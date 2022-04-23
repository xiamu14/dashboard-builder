import * as React from "react";
import { SVGProps } from "react";

const FilesLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M4 4H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h-2v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V4Z"
        fillRule="nonzero"
      />
      <path d="M17.99 5c.007.08.01.161.01.243V13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5.757c.082 0 .163.003.243.01V0l.01.01A3 3 0 0 1 14.88.88L17.12 3.12a3 3 0 0 1 .868 1.868L18 5h-.01ZM15 14H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5.757a1 1 0 0 1 .243.03V3a2 2 0 0 0 2 2h.97a1 1 0 0 1 .03.243V13a1 1 0 0 1-1 1Z" />
    </g>
  </svg>
);

export default FilesLight;
