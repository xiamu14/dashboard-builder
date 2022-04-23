import * as React from "react";
import { SVGProps } from "react";

const NotificationOffLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M4.08 2.665a7.94 7.94 0 0 0-2.021 5.33l.01 3.153a2 2 0 0 1-.611 1.444l-1.03.994A1.404 1.404 0 0 0 1.405 16H6a4 4 0 0 0 8 0h3.416l-2-2H2.879a4 4 0 0 0 1.19-2.858l-.01-3.153a5.947 5.947 0 0 1 1.44-3.907L4.08 2.665ZM10 18a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Z" />
      <path
        d="M16.05 11.806a3.993 3.993 0 0 1-.05-.634V7.97a5.97 5.97 0 0 0-8.957-5.172l-1.45-1.45A7.97 7.97 0 0 1 18 7.971l-.001 3.2a2 2 0 0 0 .586 1.414l1 1a1.414 1.414 0 0 1 .115 1.87l-3.65-3.65Z"
        fillRule="nonzero"
      />
      <path d="M.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default NotificationOffLight;
