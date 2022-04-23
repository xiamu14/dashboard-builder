import * as React from "react";
import { SVGProps } from "react";

const AttachmentLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.7 4.614a3 3 0 0 0-4.243 0L6.8 10.271a1 1 0 1 0 1.414 1.414l5.657-5.657a1 1 0 1 1 1.415 1.414L9.629 13.1a3 3 0 1 1-4.243-4.242L11.043 3.2a5 5 0 0 1 7.071 7.07l-5.657 5.658a7 7 0 1 1-9.9-9.9L8.215.371A1 1 0 1 1 9.63 1.786L3.972 7.442a5 5 0 1 0 7.07 7.071L16.7 8.857a3 3 0 0 0 0-4.243Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default AttachmentLight;
