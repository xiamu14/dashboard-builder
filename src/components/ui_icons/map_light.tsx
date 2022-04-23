import * as React from "react";
import { SVGProps } from "react";

const MapLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.206 1.315 6.141.235a3 3 0 0 1 1.708.037l4.302 1.376a3 3 0 0 0 1.708.036l2.98-.817A2.5 2.5 0 0 1 20 3.278v10.514a3 3 0 0 1-2.206 2.893l-3.935 1.08a3 3 0 0 1-1.708-.037L7.85 16.352a3 3 0 0 0-1.708-.036l-2.98.817A2.5 2.5 0 0 1 0 14.722V4.208a3 3 0 0 1 2.206-2.893Zm.53 1.929L6 2.348v11.949c-.13.025-.26.055-.388.09l-2.98.817A.5.5 0 0 1 2 14.722V4.208a1 1 0 0 1 .735-.964Zm5.722 11.203A4.98 4.98 0 0 0 8 14.324V2.42l3.542 1.133c.151.049.304.09.458.123V15.58l-3.542-1.133ZM14 15.652l3.265-.896a1 1 0 0 0 .735-.964V3.278a.5.5 0 0 0-.632-.482l-2.98.817a4.996 4.996 0 0 1-.388.09v11.949Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default MapLight;
