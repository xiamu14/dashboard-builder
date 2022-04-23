import * as React from "react";
import { SVGProps } from "react";

const GiftFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M4.5 4H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h7V6a1 1 0 1 1 2 0v3h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2.5a2.5 2.5 0 0 0-2-4h-.202c-.82 0-1.596.373-2.11 1.014L10 2.5 8.811 1.014A2.702 2.702 0 0 0 6.701 0H6.5a2.5 2.5 0 0 0-2 4Zm2.75-1.737L7.838 3H6.5a.5.5 0 0 1 0-1h.202c.213 0 .414.097.547.263ZM12.16 3l.59-.737A.701.701 0 0 1 13.298 2h.202a.5.5 0 0 1 0 1h-1.339Z" />
      <g fillRule="nonzero">
        <path d="M9 11H2c-.512 0-1 .373-1 .885V17a3 3 0 0 0 3 3h5v-9ZM11 20h5a3 3 0 0 0 3-3v-5.115c0-.512-.488-.885-1-.885h-7v9Z" />
      </g>
    </g>
  </svg>
);

export default GiftFilled;
