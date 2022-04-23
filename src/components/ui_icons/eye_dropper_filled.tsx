import * as React from "react";
import { SVGProps } from "react";

const EyeDropperFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.121 1.222a4 4 0 0 1 5.657 5.657l-.742.742a2.5 2.5 0 0 1-3.465 3.465l-4.278 4.278a3 3 0 0 1-1.697.848l-.495.071a3 3 0 0 0-1.697.849 2 2 0 0 1-2.829 0l-.707-.707a2 2 0 0 1 0-2.829 3 3 0 0 0 .849-1.697l.07-.495a3 3 0 0 1 .849-1.697L6.914 5.43a2.5 2.5 0 0 1 3.465-3.465l.742-.742ZM8.293 6.879 4.05 11.12a1 1 0 0 0-.283.566l-.07.495a5 5 0 0 1-1.415 2.828l.708.707a5 5 0 0 1 2.828-1.414l.495-.07a1 1 0 0 0 .566-.283l4.242-4.243-2.828-2.828Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default EyeDropperFilled;
