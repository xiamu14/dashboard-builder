import * as React from "react";
import { SVGProps } from "react";

const FlightLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m2 12.65 5.709-1.738A1 1 0 0 1 9 11.868V16a1 1 0 0 1-.4.8L7 18v.882l2.553-1.276a1 1 0 0 1 .894 0L13 18.882V18l-1.6-1.2a1 1 0 0 1-.4-.8v-4.132a1 1 0 0 1 1.291-.956L18 12.65v-.414a1 1 0 0 0-.553-.894l-5.894-2.948A1 1 0 0 1 11 7.5v-4a1 1 0 1 0-2 0v4a1 1 0 0 1-.553.894l-5.894 2.948a1 1 0 0 0-.553.894v.414ZM0 14v-1.764a3 3 0 0 1 1.658-2.683L7 6.882V3.5a3 3 0 1 1 6 0v3.382l5.342 2.67A3 3 0 0 1 20 12.237V14a1 1 0 0 1-1.291.957L13 13.218V15.5l1.2.9A2 2 0 0 1 15 18v2.5a1 1 0 0 1-1.447.894L10 19.618l-3.553 1.776A1 1 0 0 1 5 20.5V18a2 2 0 0 1 .8-1.6l1.2-.9v-2.282l-5.709 1.739A1 1 0 0 1 0 14Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FlightLight;
