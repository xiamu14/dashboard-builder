import * as React from "react";
import { SVGProps } from "react";

const TrainFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path d="M12 1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-3ZM3 3h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm1 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5.07 20.5a1 1 0 0 0-.832.445l-.406.61a1 1 0 0 1-1.664-1.11l.406-.609A3 3 0 0 1 5.07 18.5h7.86a3 3 0 0 1 2.496 1.336l.406.61a1 1 0 0 1-1.664 1.109l-.406-.61a1 1 0 0 0-.832-.445H5.07Z" />
    </g>
  </svg>
);

export default TrainFilled;
