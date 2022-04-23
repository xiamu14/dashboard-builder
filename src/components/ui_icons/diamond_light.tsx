import * as React from "react";
import { SVGProps } from "react";

const DiamondLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m21.16 5.184-2.927-3.966A3 3 0 0 0 15.819 0H6.181a3 3 0 0 0-2.414 1.218L.84 5.184a3 3 0 0 0 .033 3.607L8.62 18.895a3 3 0 0 0 4.762 0L21.127 8.79a3 3 0 0 0 .033-3.607ZM2.724 6l2.652-3.594A1 1 0 0 1 6.181 2h9.638a1 1 0 0 1 .805.406L19.276 6H2.724Zm.063 2 7.42 9.678a1 1 0 0 0 1.587 0L19.214 8H2.786Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default DiamondLight;
