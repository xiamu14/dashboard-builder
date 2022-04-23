import * as React from "react";
import { SVGProps } from "react";

const EyeDropperLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.778 1.222a4 4 0 0 0-5.657 0l-.742.742A2.5 2.5 0 0 0 6.914 5.43L2.636 9.707a3 3 0 0 0-.848 1.697l-.071.495a3 3 0 0 1-.849 1.697 2 2 0 0 0 0 2.829l.707.707a2 2 0 0 0 2.829 0 3 3 0 0 1 1.697-.849l.495-.07a3 3 0 0 0 1.697-.849l4.278-4.278a2.5 2.5 0 0 0 3.465-3.465l.742-.742a4 4 0 0 0 0-5.657Zm-7.504 2.41 1.363.902 1.899-1.898a2 2 0 1 1 2.828 2.828l-1.899 1.899.903 1.363a.5.5 0 0 1-.772.627l-4.95-4.95a.5.5 0 0 1 .628-.771Zm1.847 6.075L8.293 6.88 4.05 11.12a1 1 0 0 0-.283.566l-.07.495a5 5 0 0 1-1.415 2.828l.708.707a5 5 0 0 1 2.828-1.414l.495-.07a1 1 0 0 0 .566-.283l4.242-4.243Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default EyeDropperLight;
