import * as React from "react";
import { SVGProps } from "react";

const ToolLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.597 10.859a2 2 0 0 1 1.93-.518c1.34.358 2.821.01 3.866-1.036a3.987 3.987 0 0 0 1.164-2.578l-.457.457a3 3 0 1 1-4.242-4.243l.457-.457a3.987 3.987 0 0 0-2.579 1.164 3.998 3.998 0 0 0-1.035 3.866 2 2 0 0 1-.518 1.93l-5.518 5.518a1 1 0 1 0 1.415 1.414l5.517-5.517Zm1.414 1.414a6.002 6.002 0 0 0 7.031-8.25c-.252-.564-.984-.625-1.422-.188L14.686 5.77a1 1 0 1 1-1.414-1.415l1.934-1.934c.437-.437.376-1.17-.188-1.422a6.002 6.002 0 0 0-8.25 7.031l-5.517 5.518a3 3 0 1 0 4.243 4.242l5.517-5.517Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ToolLight;
