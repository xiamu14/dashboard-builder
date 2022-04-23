import * as React from "react";
import { SVGProps } from "react";

const PinLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 14h4a1 1 0 0 0 1-1v-.324a5 5 0 0 0-2.226-4.16l-.329-.22A1 1 0 0 1 9 7.466V5.85a1 1 0 0 1 .22-.625l1.56-1.952a1 1 0 0 0 .22-.625V1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v1.65a1 1 0 0 0 .22.624l1.56 1.952a1 1 0 0 1 .22.625v1.614a1 1 0 0 1-.445.832l-.329.219A5 5 0 0 0 0 12.676V13a1 1 0 0 0 1 1h4v5a1 1 0 1 0 2 0v-5Zm1.664-3.82A3 3 0 0 1 9.923 12H2.077a3 3 0 0 1 1.259-1.82l.328-.219A3 3 0 0 0 5 7.465V5.85a3 3 0 0 0-.657-1.874L3 2.298V2h6v.298L7.657 3.977A3 3 0 0 0 7 5.85v1.614A3 3 0 0 0 8.336 9.96l.328.219Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default PinLight;
