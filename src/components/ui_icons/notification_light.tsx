import * as React from "react";
import { SVGProps } from "react";

const NotificationLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 14.596c0-.38.155-.745.429-1.01l1.029-.994a2 2 0 0 0 .61-1.444l-.01-3.153A7.97 7.97 0 1 1 18 7.97v3.2a2 2 0 0 0 .586 1.415l1 1a1.414 1.414 0 0 1-1 2.414H14a4 4 0 0 1-8 0H1.404A1.404 1.404 0 0 1 0 14.596ZM8 16a2 2 0 1 0 4 0H8Zm8-4.828A4 4 0 0 0 17.172 14H2.879a4 4 0 0 0 1.19-2.858l-.01-3.153A5.97 5.97 0 1 1 16 7.97v3.2Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default NotificationLight;
