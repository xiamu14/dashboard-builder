import * as React from "react";
import { SVGProps } from "react";

const PaintBucketLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M18.682 13.595c.215.263.447.555.671.842.616.786 1.18 1.54 1.215 1.587v.001l.002.001h-.002l.002.002c.413.517.663 1.17.669 1.883v.028a3.06 3.06 0 1 1-5.45-1.913l.002-.003a72.192 72.192 0 0 1 1.884-2.428.646.646 0 0 1 1.007 0Zm.325 3.682a1.06 1.06 0 1 1-1.658 0c.222-.291.442-.584.664-.876l.166-.215.168.218c.221.29.432.589.66.873ZM8.707 1.222a1 1 0 0 1 1.414 0L17.9 9a1 1 0 0 1 0 1.414l-7.07 7.071a3 3 0 0 1-4.243 0l-4.95-4.95a3 3 0 0 1 0-4.242l7.071-7.071Zm.707 2.121L3.05 9.707a1 1 0 0 0 0 1.414L8 16.071a1 1 0 0 0 1.414 0l6.364-6.364-6.364-6.364Z" />
      <path
        d="M4.536 1.293A1 1 0 0 0 3.12 2.707L8.543 8.13a2 2 0 1 0 1.414-1.415L4.536 1.293Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default PaintBucketLight;
