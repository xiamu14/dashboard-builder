import * as React from "react";
import { SVGProps } from "react";

const BluetoothOffLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M8 6.584 7.917 10l-4.495 3.184a1 1 0 1 0 1.156 1.632L8 12.392v5.692c0 1.187 1.313 1.904 2.311 1.262l4.984-3.204a1.98 1.98 0 0 0 .894-1.369l-4.68-4.679-.132-.094.023-.016-3.4-3.4Zm2 10.584v-5.693l4.213 2.985L10 17.168Z" />
      <path
        d="m13.055 8.811 2.314-1.639a2 2 0 0 0-.074-3.314L10.31.654C9.313.012 8 .73 8 1.916v1.84l2 2V2.832l4.213 2.708-2.592 1.837 1.434 1.434Z"
        fillRule="nonzero"
      />
      <path d="M.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default BluetoothOffLight;
