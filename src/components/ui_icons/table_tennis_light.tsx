import * as React from "react";
import { SVGProps } from "react";

const TableTennisLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path id="prefix__a" d="M0 0h24v24H0z" />
    </defs>
    <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
      <mask id="prefix__b" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <g mask="url(#prefix__b)" fill={props.color || "#6F767E"}>
        <path d="M10.648 17.766a2 2 0 0 1 2.085-.47 5 5 0 1 0-3.03-3.029 2 2 0 0 1-.47 2.085L8.05 17.536a1 1 0 1 0 1.414 1.414l1.184-1.184Zm1.414 1.415-1.183 1.183a3 3 0 1 1-4.243-4.243l1.183-1.183a7 7 0 1 1 4.243 4.243ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </g>
    </g>
  </svg>
);

export default TableTennisLight;
