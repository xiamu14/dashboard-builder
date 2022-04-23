import * as React from "react";
import { SVGProps } from "react";

const BoxFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M5.243 0H6.34a.5.5 0 0 1 .453.711L5.375 3.752a4 4 0 0 0-.276.807.549.549 0 0 1-.522.441H.446A.446.446 0 0 1 0 4.554c0-.355.14-.695.392-.946l2.73-2.73A3 3 0 0 1 5.241 0ZM12.95 5a2.008 2.008 0 0 0-.138-.402l-2.01-4.31A.5.5 0 0 0 10.347 0h-.696a.5.5 0 0 0-.453.289L7.188 4.598A2 2 0 0 0 7 5.444V9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5.444c0-.15-.017-.299-.05-.444ZM14.901 4.56c.056.248.267.44.522.44h4.131C19.8 5 20 4.8 20 4.554c0-.355-.14-.695-.392-.946l-2.73-2.73A3 3 0 0 0 14.759 0h-1.1a.5.5 0 0 0-.452.711l1.419 3.041c.12.26.213.53.276.807Z" />
      <path d="M1 7h3.5a.5.5 0 0 1 .5.5V9a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V7.5a.5.5 0 0 1 .5-.5H19a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V8a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default BoxFilled;
