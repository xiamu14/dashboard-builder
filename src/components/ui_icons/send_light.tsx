import * as React from "react";
import { SVGProps } from "react";

const SendLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.193 4.578C-.638 2.086 1.91-.195 4.296.906l13.802 6.37c2.324 1.073 2.324 4.375 0 5.448l-13.802 6.37C1.91 20.195-.638 17.914.193 15.422l1.49-4.473a3 3 0 0 0 0-1.898L.194 4.578Zm3.265-1.856 13.802 6.37a1 1 0 0 1 0 1.816l-13.802 6.37c-.795.367-1.645-.393-1.368-1.224l1.491-4.473A5 5 0 0 0 3.737 11H12a1 1 0 0 0 0-2H3.737a5.002 5.002 0 0 0-.156-.581l-1.49-4.473c-.278-.831.572-1.591 1.367-1.224Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default SendLight;
