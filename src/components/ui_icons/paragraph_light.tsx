import * as React from "react";
import { SVGProps } from "react";

const ParagraphLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 0a6 6 0 1 0 0 12h2v7a1 1 0 1 0 2 0V2h3v17a1 1 0 1 0 2 0V2h1a1 1 0 1 0 0-2H6Zm0 2h2v8H6a4 4 0 1 1 0-8Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ParagraphLight;
