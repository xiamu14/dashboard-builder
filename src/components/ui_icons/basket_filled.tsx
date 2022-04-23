import * as React from "react";
import { SVGProps } from "react";

const BasketFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.879 1.707 3.586 6H1.153a1 1 0 0 0-.99 1.141l1.47 10.283A3 3 0 0 0 4.601 20h10.796a3 3 0 0 0 2.97-2.576l1.469-10.283A1 1 0 0 0 18.847 6h-2.433l-4.293-4.293a3 3 0 0 0-4.242 0Zm2.828 1.414a1 1 0 0 0-1.414 0L6.414 6h7.172l-2.879-2.879ZM7 11a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm3-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm5 1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default BasketFilled;
