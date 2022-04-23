import * as React from "react";
import { SVGProps } from "react";

const StoreFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.518 0h8.93a3 3 0 0 1 2.796 1.913l1.788 4.597A2.356 2.356 0 0 1 20 9.412V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9.412A2.356 2.356 0 0 1 .968 6.51l1.788-4.597A3 3 0 0 1 5.552 0h1.966Zm9.33 7.19c.016.006.031.014.046.021l.702.35c.41.206.882.258 1.327.147a.355.355 0 0 0 .245-.473L17.38 2.638A1 1 0 0 0 16.448 2h-.711l1.112 5.19ZM13.693 2l1.138 5.314-.216.086a3 3 0 0 1-2.228 0L12 7.246V2h1.692ZM8.308 2H10v5.246l-.386.154a3 3 0 0 1-2.228 0l-.216-.086L8.308 2ZM6.263 2 5.151 7.19l-.045.021-.702.35c-.41.206-.882.258-1.327.147a.355.355 0 0 1-.245-.473L4.62 2.638A1 1 0 0 1 5.552 2h.711ZM10 12a2 2 0 0 0-2 2v3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V14a2 2 0 0 0-2-2h-2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default StoreFilled;
