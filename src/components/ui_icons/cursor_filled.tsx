import * as React from "react";
import { SVGProps } from "react";

const CursorFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m.193 2.724 1.274 13.1c.208 2.137 2.835 3.035 4.308 1.473l2.208-2.344a.5.5 0 0 1 .797.093l2.514 4.355a1 1 0 0 0 1.732-1l-2.514-4.355a.5.5 0 0 1 .318-.736l3.134-.741c2.09-.494 2.626-3.219.879-4.467L4.135.448C2.389-.8-.015.588.193 2.724Z"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    />
  </svg>
);

export default CursorFilled;
