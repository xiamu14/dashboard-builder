import * as React from "react";
import { SVGProps } from "react";

const PinterestLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.32.04c2.66-.122 5.399.827 6.97 2.846C19.287 8.026 15.42 15 10 15c-1.287 0-2.299-.283-3.067-.79a3.753 3.753 0 0 1-.751-.652l-1.765 5.736a1 1 0 1 1-1.912-.588l4-13a1 1 0 0 1 1.912.588L7.206 10.23a3.234 3.234 0 0 0-.029.404c-.003.3.033.668.163 1.018.125.337.334.65.695.889.366.242.968.459 1.965.459 3.715 0 6.712-5.027 3.71-8.886-1.07-1.376-3.1-2.177-5.299-2.076-2.174.1-4.326 1.08-5.618 3.017-.84 1.26-.916 2.462-.67 3.372.262.97.846 1.504 1.21 1.62a1 1 0 0 1-.608 1.906c-1.204-.384-2.154-1.6-2.533-3.004-.396-1.466-.223-3.264.937-5.004C2.837 1.383 5.634.165 8.32.04Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default PinterestLight;
