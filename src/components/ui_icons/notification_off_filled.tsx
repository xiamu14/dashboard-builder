import * as React from "react";
import { SVGProps } from "react";

const NotificationOffFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M13.738 18.176c.397-.548-.133-1.176-.86-1.176H7.122c-.727 0-1.257.628-.86 1.176C7.055 19.274 8.432 20 10 20c1.567 0 2.944-.726 3.738-1.824Z"
        fillRule="nonzero"
      />
      <g fillRule="nonzero">
        <path d="M4.082 2.666a7.94 7.94 0 0 0-2.021 5.33l.007 2.151a2 2 0 0 1-.61 1.445l-1.03.994A1.404 1.404 0 0 0 1.405 15h15.012L4.082 2.666ZM19.134 14.89a1.415 1.415 0 0 0 .452-2.304l-1-1A2 2 0 0 1 18 10.172V7.97A7.97 7.97 0 0 0 5.593 1.349l13.541 13.54Z" />
      </g>
      <path d="M.293.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default NotificationOffFilled;
