import * as React from "react";
import { SVGProps } from "react";

const ChromeLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 18.66C10.217 21.422 4.101 19.783 1.34 15-1.422 10.217.217 4.1 5 1.34 9.783-1.422 15.899.217 18.66 5c2.762 4.783 1.123 10.899-3.66 13.66Zm-4.411-.68A8.003 8.003 0 0 0 17.601 7.5h-3.859a4.499 4.499 0 0 1 .115 4.82l-3.268 5.66ZM10.086 5.5h6.529a8 8 0 0 0-12.58-.833l1.929 3.342A4.479 4.479 0 0 1 7.75 6.103a4.48 4.48 0 0 1 2.336-.603Zm-2.251 5.75A2.5 2.5 0 0 1 10 7.5h.05a2.499 2.499 0 0 1 2.115 3.75l-.02.036a2.5 2.5 0 0 1-4.31-.036Zm-1.732 1a4.5 4.5 0 0 0 4.19 2.241l-1.927 3.34A7.98 7.98 0 0 1 3.072 14a7.992 7.992 0 0 1-.277-7.48l3.308 5.73Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ChromeLight;
