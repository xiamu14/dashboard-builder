import * as React from "react";
import { SVGProps } from "react";

const PuzzleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 2.5c0 .208-.025.41-.073.602-.099.4.162.898.574.898H16a2 2 0 0 1 2 2v1.999c0 .412-.498.673-.898.574a2.5 2.5 0 1 0 0 4.854c.4-.099.898.162.898.574V16a2 2 0 0 1-2 2h-1.999c-.412 0-.673-.498-.574-.898a2.5 2.5 0 1 0-4.854 0c.099.4-.162.898-.574.898H6a2 2 0 0 1-2-2v-1.999c0-.412-.498-.673-.898-.574a2.5 2.5 0 1 1 0-4.854c.4.099.898-.162.898-.574V6a2 2 0 0 1 2-2h1.999c.412 0 .673-.498.574-.898A2.5 2.5 0 1 1 13.5 2.5Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default PuzzleFilled;
