import * as React from "react";
import { SVGProps } from "react";

const BriefcaseLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.246 1.886 5.8 3H3a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.8l-.446-1.114A3 3 0 0 0 10.97 0H9.03a3 3 0 0 0-2.785 1.886ZM10.969 2H9.03a1 1 0 0 0-.928.629L7.954 3h4.092l-.149-.371A1 1 0 0 0 10.97 2ZM17 5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-4.268A2 2 0 0 0 11 9H9a2 2 0 0 0-1.732 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14Zm-9.732 7H3c-.35 0-.687-.06-1-.17V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.17c-.313.11-.65.17-1 .17h-4.268A2 2 0 0 1 11 13H9a2 2 0 0 1-1.732-1Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default BriefcaseLight;
