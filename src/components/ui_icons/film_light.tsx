import * as React from "react";
import { SVGProps } from "react";

const FilmLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 2h3v2h-3V2Zm5 2V2h1a1 1 0 0 1 1 1v1h-2Zm-5 2h7v6h-7V6Zm3 8h-3v2h3v-2Zm2 2v-2h2v1a1 1 0 0 1-1 1h-1ZM9 2H6v2h3V2Zm0 4H2v6h7V6Zm0 8H6v2h3v-2Zm1 4h7a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h7ZM4 2H3a1 1 0 0 0-1 1v1h2V2ZM2 15v-1h2v2H3a1 1 0 0 1-1-1Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default FilmLight;
