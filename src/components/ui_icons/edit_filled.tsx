import * as React from "react";
import { SVGProps } from "react";

const EditFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="m1.986 19.191 5.303-1.06a1 1 0 0 0 .51-.274l6.65-6.65a1 1 0 0 0 0-1.414L10.208 5.55a1 1 0 0 0-1.414 0l-6.65 6.65a1 1 0 0 0-.273.511L.809 18.014a1 1 0 0 0 1.177 1.177ZM18.192 3.222l-1.414-1.414a3 3 0 0 0-4.242 0l-.986.985a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414 0l.985-.986a3 3 0 0 0 0-4.242Z" />
    </g>
  </svg>
);

export default EditFilled;
