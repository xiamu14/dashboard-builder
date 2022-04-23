import * as React from "react";
import { SVGProps } from "react";

const CursorLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m.966 16.625-.98-12.63C-.21 1.483 2.594-.136 4.673 1.29L15.12 8.453c2.119 1.453 1.551 4.722-.933 5.376l-3.685.97 2.864 4.96a1 1 0 1 1-1.732 1l-2.864-4.96-2.682 2.706c-1.808 1.824-4.923.68-5.122-1.88Zm1.994-.155L1.98 3.84a1 1 0 0 1 1.562-.901l10.447 7.164a1 1 0 0 1-.31 1.791L9.781 12.92a5 5 0 0 0-2.278 1.315l-2.836 2.862a1 1 0 0 1-1.708-.627Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default CursorLight;
