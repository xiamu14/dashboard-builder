import * as React from "react";
import { SVGProps } from "react";

const PenFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      transform="translate(-5 -1)"
      fill={props.color || "#6F767E"}
      fillRule="nonzero"
    >
      <rect x={6} y={18} width={12} height={4} rx={2} />
      <path d="M10.95 7.775a.638.638 0 0 0 .3-.523v-5.75c0-.508-.602-.729-.895-.328l-4.34 5.958a2.82 2.82 0 0 0-.212 2.935l2.8 5.384c.177.339.511.549.874.549h5.046c.363 0 .697-.21.874-.55l2.8-5.383a2.82 2.82 0 0 0-.211-2.935l-4.341-5.958c-.293-.4-.895-.18-.895.328v5.75c0 .218.127.408.3.523.57.376.95 1.05.95 1.818 0 1.18-.895 2.135-2 2.135s-2-.956-2-2.135c0-.769.38-1.442.95-1.818Z" />
    </g>
  </svg>
);

export default PenFilled;
