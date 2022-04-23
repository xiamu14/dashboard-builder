import * as React from "react";
import { SVGProps } from "react";

const ShipFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 1a1 1 0 1 0-2 0v1H7.5A2.5 2.5 0 0 0 5 4.5V5a3 3 0 0 0-3 3v3.286l-.138.04a2.5 2.5 0 0 0-1.73 3.047L.968 17.5a1 1 0 0 0-.414 1.894l.105.053a3 3 0 0 0 2.684 0l.21-.105a1 1 0 0 1 .895 0l.211.105a3 3 0 0 0 2.684 0l.21-.105a1 1 0 0 1 .895 0l.211.105a3 3 0 0 0 2.684 0l.21-.105a1 1 0 0 1 .895 0l.211.105a3 3 0 0 0 2.684 0l.21-.105a1 1 0 0 1 .895 0l.211.105a3 3 0 0 0 2.684 0l.105-.053a1 1 0 0 0-.414-1.894l.834-3.127a2.5 2.5 0 0 0-1.729-3.048l-.138-.04V8a3 3 0 0 0-3-3v-.5A2.5 2.5 0 0 0 12.5 2H11V1Zm5 9.714V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2.714l5.176-1.479a3 3 0 0 1 1.648 0L16 10.715Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default ShipFilled;
