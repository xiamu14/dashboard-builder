import * as React from "react";
import { SVGProps } from "react";

const MissionLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 0a1 1 0 0 0-1 1v7c-.41.144-.794.38-1.121.707L.586 12A2 2 0 0 0 0 13.414V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.586A2 2 0 0 0 19.414 14l-2.293-2.293a3 3 0 0 0-4.242 0l-.879.879-3.879-3.879A2.988 2.988 0 0 0 7 8V6h5a1 1 0 0 0 .894-1.447L12.118 3l.776-1.553A1 1 0 0 0 12 0H6Zm4.382 4H7V2h3.382l-.276.553a1 1 0 0 0 0 .894l.276.553ZM2 13.414l3.293-3.293a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 1 1.414 0L18 15.414V18H2v-4.586Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default MissionLight;
