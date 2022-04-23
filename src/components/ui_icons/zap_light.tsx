import * as React from "react";
import { SVGProps } from "react";

const ZapLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.626 1.528c2.213-2.402 6.127-.039 5.033 3.038l-1.17 3.291h3.663c2.614 0 3.978 3.11 2.207 5.033l-6.985 7.582c-2.213 2.402-6.127.039-5.033-3.038l1.17-3.291H3.849c-2.614 0-3.978-3.11-2.207-5.033l6.985-7.582Zm3.148 2.368c.365-1.026-.94-1.813-1.677-1.012l-6.985 7.581c-.59.641-.136 1.678.736 1.678h5.08a1 1 0 0 1 .943 1.335l-1.646 4.626c-.364 1.025.94 1.813 1.678 1.012l6.985-7.581c.59-.641.136-1.678-.736-1.678h-5.08a1 1 0 0 1-.943-1.335l1.645-4.626Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ZapLight;
