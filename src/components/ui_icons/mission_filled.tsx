import * as React from "react";
import { SVGProps } from "react";

const MissionFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 1a1 1 0 0 1 1-1h6a1 1 0 0 1 .894 1.447L12.118 3l.776 1.553A1 1 0 0 1 12 6H7v1.83c.279.12.54.296.768.524L12 12.586l1.232-1.232a2.5 2.5 0 0 1 3.536 0L19.414 14A2 2 0 0 1 20 15.414V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.586A2 2 0 0 1 .586 12l3.646-3.646c.228-.228.49-.403.768-.525V1Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default MissionFilled;
