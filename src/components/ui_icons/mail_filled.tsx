import * as React from "react";
import { SVGProps } from "react";

const MailFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M.458 1.407c-.133.21-.046.481.166.612l8.85 5.479a1 1 0 0 0 1.052 0l8.85-5.479c.212-.13.299-.401.166-.612A2.998 2.998 0 0 0 17 0H3A2.998 2.998 0 0 0 .458 1.407Z" />
      <path d="M20 4.883a.5.5 0 0 0-.763-.425l-7.658 4.74a3 3 0 0 1-3.158 0L.763 4.459A.5.5 0 0 0 0 4.883V13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V4.883Z" />
    </g>
  </svg>
);

export default MailFilled;
