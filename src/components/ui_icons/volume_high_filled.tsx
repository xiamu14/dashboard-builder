import * as React from "react";
import { SVGProps } from "react";

const VolumeHighFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M14.81 12.392a3 3 0 0 0 0-4.785 1.786 1.786 0 0 1-.298-.284c-.264-.321-.404-.732-.276-1.127.17-.525.742-.821 1.223-.55.194.11.38.232.557.366m0 0a5.002 5.002 0 0 1 0 7.976 5.001 5.001 0 0 1-.557.366c-.48.271-1.052-.025-1.223-.55-.128-.395.012-.806.276-1.127a1.741 1.741 0 0 1 .298-.285" />
      <path d="M16.887 15.26a6 6 0 0 0-.112-10.58l-.004-.002a1.28 1.28 0 0 1-.207-.136c-.358-.288-.545-.755-.4-1.2.17-.525.738-.818 1.237-.583A8.003 8.003 0 0 1 22 10a8 8 0 0 1-4.599 7.24c-.5.236-1.067-.057-1.238-.583-.144-.444.043-.911.4-1.2a1.278 1.278 0 0 1 .208-.135l.004-.002.112-.06Z" />
      <path
        d="M13 17.592V2.408C13 .689 10.976-.23 9.683.902L5 5H3a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2l4.683 4.098C10.976 20.229 13 19.31 13 17.592Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default VolumeHighFilled;
