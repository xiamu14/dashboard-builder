import * as React from "react";
import { SVGProps } from "react";

const GroupFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M0 14v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4ZM17.754 17.312c-.038.343.219.688.584.688h2.605c.584 0 1.057-.448 1.057-1v-3c0-2.21-1.894-4-4.23-4h-1.024a.27.27 0 0 0-.218.433A5.762 5.762 0 0 1 17.77 14v3c0 .105-.005.21-.016.312ZM12 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM13.05 7.948c-.364-.056-.487-.459-.291-.75A5.708 5.708 0 0 0 13.74 4c0-1.175-.36-2.272-.982-3.197-.196-.292-.073-.695.29-.75.225-.035.456-.053.692-.053C16.093 0 18 1.79 18 4s-1.907 4-4.26 4c-.235 0-.466-.018-.69-.052Z" />
    </g>
  </svg>
);

export default GroupFilled;
