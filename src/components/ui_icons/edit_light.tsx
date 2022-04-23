import * as React from "react";
import { SVGProps } from "react";

const EditLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.536 1.808a3 3 0 0 1 4.242 0l1.414 1.414a3 3 0 0 1 0 4.242L7.8 17.857a1 1 0 0 1-.511.273l-5.303 1.061a1 1 0 0 1-1.177-1.177l1.06-5.303a1 1 0 0 1 .274-.51L12.536 1.807Zm2.828 1.414 1.414 1.414a1 1 0 0 1 0 1.414l-1.414 1.414-2.828-2.828 1.414-1.414a1 1 0 0 1 1.414 0ZM11.12 6.05l-7.35 7.35-.707 3.536 3.536-.707 7.35-7.35L11.12 6.05Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default EditLight;
