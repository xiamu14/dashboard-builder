import * as React from "react";
import { SVGProps } from "react";

const DatabaseFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M.824 11.904c-.357-.21-.824.056-.824.494v1.291C0 16.138 3.95 18 9 18s9-1.862 9-4.31v-1.292c0-.438-.467-.703-.824-.494-.185.108-.375.21-.571.308-1.827.906-4.381 1.477-7.605 1.477s-5.778-.571-7.605-1.477a9.374 9.374 0 0 1-.57-.308ZM18 3.086C18 4.79 13.97 6 9 6S0 4.79 0 3.086C0 1.382 4.03 0 9 0s9 1.382 9 3.086Z" />
      <path d="M9 7.73c2.62 0 5.087-.337 6.968-.972.424-.144.844-.311 1.244-.507A.554.554 0 0 1 18 6.76v1.505C18 9.865 15.05 12 9 12S0 9.865 0 8.264V6.759c0-.417.433-.682.788-.508.4.196.82.363 1.244.507C3.913 7.393 6.38 7.73 9 7.73Z" />
    </g>
  </svg>
);

export default DatabaseFilled;
