import * as React from "react";
import { SVGProps } from "react";

const BluetoothFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 2.832v5.693l4.213-2.985L7 2.832ZM5 7.608V1.916C5 .729 6.313.012 7.311.654l4.984 3.204a2 2 0 0 1 .074 3.314L8.377 10l3.992 2.828a2 2 0 0 1-.074 3.314L7.31 19.346C6.313 19.988 5 19.271 5 18.084v-5.692l-3.422 2.424a1 1 0 1 1-1.156-1.632L4.917 10 .422 6.816a1 1 0 0 1 1.156-1.632L5 7.608Zm2 3.867v5.693l4.213-2.708L7 11.475Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default BluetoothFilled;
