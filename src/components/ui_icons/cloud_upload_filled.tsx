import * as React from "react";
import { SVGProps } from "react";

const CloudUploadFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || "#6F767E"} fillRule="evenodd">
      <path
        d="M15.948 12.609c.072.39.487.678.816.465A7.11 7.11 0 0 0 20 7.093C20 3.176 16.866 0 13 0c-2.89 0-5.37 1.774-6.439 4.305A4.936 4.936 0 0 0 5 4.053c-2.761 0-5 2.268-5 5.066 0 2.21 1.397 4.09 3.346 4.783.355.126.67-.232.656-.613a3.054 3.054 0 0 1 .877-2.266l2.998-3.039.011-.01c.286-.287.614-.504.964-.65a2.97 2.97 0 0 1 3.256.646l.015.015 2.998 3.038c.444.45.72 1.005.827 1.586Z"
        fillRule="nonzero"
      />
      <path d="M7.707 13.707a1 1 0 0 1-1.414-1.414l3-3A.997.997 0 0 1 9.997 9h.006a.997.997 0 0 1 .704.293l3 3a1 1 0 0 1-1.414 1.414L11 12.414V18a1 1 0 1 1-2 0v-5.586l-1.293 1.293Z" />
    </g>
  </svg>
);

export default CloudUploadFilled;
