import * as React from "react";
import { SVGProps } from "react";

const TicketFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 0a3 3 0 0 0-3 3v2c0 .552.475.98.959 1.244a2 2 0 0 1 0 3.512C.475 10.02 0 10.448 0 11v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2c0-.552-.474-.98-.959-1.244a2 2 0 0 1 0-3.512C19.526 5.98 20 5.552 20 5V3a3 3 0 0 0-3-3H3Zm7.944 4.717c-.31-.895-1.577-.895-1.889 0l-.237.684a1 1 0 0 1-.924.672l-.724.014c-.948.02-1.34 1.224-.584 1.797l.577.437a1 1 0 0 1 .353 1.087l-.21.693c-.274.907.75 1.651 1.529 1.11l.594-.414a1 1 0 0 1 1.142 0l.594.414c.779.541 1.803-.203 1.529-1.11l-.21-.693a1 1 0 0 1 .353-1.087l.577-.437c.755-.573.364-1.777-.584-1.797l-.724-.014a1 1 0 0 1-.924-.672l-.238-.684Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default TicketFilled;
