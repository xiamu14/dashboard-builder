import * as React from "react";
import { SVGProps } from "react";

const ShuffleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.793.793a1 1 0 0 1 1.414 0l2.145 2.145a1.5 1.5 0 0 1 0 2.121l-2.145 2.145a1 1 0 1 1-1.414-1.414l.794-.794h-2.322a3 3 0 0 0-2.573 1.457L10.164 9l1.528 2.547a3 3 0 0 0 2.573 1.457h2.322l-.794-.794a1 1 0 0 1 1.414-1.414l2.145 2.145a1.5 1.5 0 0 1 0 2.121l-2.145 2.145a1 1 0 1 1-1.414-1.414l.789-.79h-2.317a5 5 0 0 1-4.288-2.427l-.98-1.632-.974 1.625a5 5 0 0 1-4.288 2.427H1a1 1 0 0 1 0-2h2.735a3 3 0 0 0 2.573-1.456L7.832 9 6.308 6.46a3 3 0 0 0-2.573-1.456H1a1 1 0 1 1 0-2h2.735A5 5 0 0 1 8.023 5.43l.975 1.625.98-1.632a5 5 0 0 1 4.287-2.428h2.317l-.79-.789a1 1 0 0 1 0-1.414Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default ShuffleFilled;
