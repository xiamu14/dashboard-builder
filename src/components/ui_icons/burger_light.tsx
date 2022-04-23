import * as React from "react";
import { SVGProps } from "react";

const BurgerLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M1 13.5A2.5 2.5 0 0 1 2.5 9h15a2.5 2.5 0 0 1 1.5 4.5V15a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-1.5ZM2.5 11h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1Zm.5 3v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1H3ZM1.082 5.007A6.002 6.002 0 0 1 7 0h6a6.002 6.002 0 0 1 5.918 5.007 1 1 0 0 1 .757 1.479l-.795 1.43a1.5 1.5 0 0 1-2.272.424l-.312-.26a1.848 1.848 0 0 0-2.49.113l-.056.057c-.69.69-1.81.69-2.5 0s-1.81-.69-2.5 0-1.81.69-2.5 0l-.057-.057a1.848 1.848 0 0 0-2.49-.113l-.311.26a1.5 1.5 0 0 1-2.272-.424l-.795-1.43a1 1 0 0 1 .757-1.48ZM7 2h6a4.002 4.002 0 0 1 3.874 3H3.126C3.57 3.275 5.136 2 7 2Z" />
    </g>
  </svg>
);

export default BurgerLight;
