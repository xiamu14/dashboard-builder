import * as React from "react";
import { SVGProps } from "react";

const NotificationFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="nonzero">
      <path d="M13.738 18.176c.397-.548-.133-1.176-.86-1.176H7.122c-.727 0-1.257.628-.86 1.176C7.055 19.274 8.432 20 10 20c1.567 0 2.944-.726 3.738-1.824ZM18.586 15H1.404a1.404 1.404 0 0 1-.975-2.414l1.028-.994a2 2 0 0 0 .61-1.445l-.006-2.151A7.97 7.97 0 1 1 18 7.97v2.202a2 2 0 0 0 .586 1.414l1 1a1.414 1.414 0 0 1-1 2.414Z" />
    </g>
  </svg>
);

export default NotificationFilled;
