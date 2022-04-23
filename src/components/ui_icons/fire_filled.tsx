import * as React from "react";
import { SVGProps } from "react";

const FireFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 20c4.253 0 8-3.08 8-7.189 0-4.108-3-6.162-4-7.189-1.406-1.444-1.848-3.341-1.975-4.647-.07-.723-.75-1.236-1.339-.834C7.534.926 5.904 2.529 5 5.622 4.572 7.09 4.572 8.458 5 9.73c-.667-.342-1.167-1.027-1.5-2.054a53.777 53.777 0 0 0-.603-1.728c-.316-.866-1.456-.858-1.734.022C.615 7.705 0 10.042 0 11.784 0 16.92 3.747 20 8 20Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default FireFilled;
