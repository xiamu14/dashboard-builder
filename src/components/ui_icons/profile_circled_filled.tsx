import * as React from "react";
import { SVGProps } from "react";

const ProfileCircledFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10Zm-4.286 4.4a.854.854 0 0 1 0 1.2A7.976 7.976 0 0 1 10 18a7.976 7.976 0 0 1-5.714-2.4.854.854 0 0 1 0-1.2A7.976 7.976 0 0 1 10 12c2.238 0 4.262.92 5.714 2.4ZM10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ProfileCircledFilled;
