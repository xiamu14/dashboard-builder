import * as React from "react";
import { SVGProps } from "react";

const WineFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 14.353c0-.247.18-.455.422-.508a6.52 6.52 0 0 0 5.08-6.827l-.37-5.16A2 2 0 0 0 11.139 0H2.862A2 2 0 0 0 .867 1.857L.5 7.018a6.52 6.52 0 0 0 5.08 6.828c.24.053.421.261.421.508v2.3a1 1 0 0 1-.836.986l-1.328.222a1 1 0 0 0-.836.986V19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-.153a1 1 0 0 0-.836-.986l-1.328-.222A1 1 0 0 1 8 16.653v-2.3ZM11.138 2H2.862l-.214 3h8.704l-.214-3Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default WineFilled;
