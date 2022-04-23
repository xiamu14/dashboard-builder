import * as React from "react";
import { SVGProps } from "react";

const HandCursorFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.64 9.478 9.744 8.174a1.001 1.001 0 0 1-.787-.976V1.993C8.957.893 8.061 0 6.955 0a1.998 1.998 0 0 0-2.003 1.993v8.994c0 .304-.396.424-.566.171l-.458-.68C2.848 8.87.348 9.405.03 11.312c-.075.447-.005.905.199 1.31l2.885 5.722A3.016 3.016 0 0 0 5.807 20h9.179A3.007 3.007 0 0 0 18 17v-4.594a3.003 3.003 0 0 0-2.36-2.928Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default HandCursorFilled;
