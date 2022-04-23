import * as React from "react";
import { SVGProps } from "react";

const BasketLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="m3.586 6 4.293-4.293a3 3 0 0 1 4.242 0L16.414 6h2.433a1 1 0 0 1 .99 1.141l-1.47 10.283A3 3 0 0 1 15.399 20H4.602a3 3 0 0 1-2.97-2.576L.163 7.141A1 1 0 0 1 1.153 6h2.433Zm5.707-2.879a1 1 0 0 1 1.414 0L13.586 6H6.414l2.879-2.879ZM2.306 8l1.306 9.141a1 1 0 0 0 .99.859h10.796a1 1 0 0 0 .99-.859L17.694 8H2.306Z" />
      <path d="M6 10a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1ZM10 10a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1ZM14 10a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default BasketLight;
