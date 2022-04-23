import * as React from "react";
import { SVGProps } from "react";

const PaintRollerLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 3a3 3 0 0 1 3-3h10c1.306 0 2.418.835 2.83 2H16a3 3 0 0 1 3 3v1.86a3 3 0 0 1-2.412 2.942L9.804 11.16a1 1 0 0 0-.804.98v.129A2 2 0 0 1 10 14v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 1-1.732v-.128a3 3 0 0 1 2.412-2.942l6.784-1.357a1 1 0 0 0 .804-.98V5a1 1 0 0 0-1-1 3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm14 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default PaintRollerLight;
