import * as React from "react";
import { SVGProps } from "react";

const InternetLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0ZM2.252 8A8.015 8.015 0 0 0 2 10c0 .69.088 1.36.252 2h2.842a21.013 21.013 0 0 1 0-4H2.252Zm.818-2h2.323c.212-1.024.505-1.96.865-2.77.06-.136.123-.269.188-.399A8.036 8.036 0 0 0 3.07 6Zm4.034 2A18.91 18.91 0 0 0 7 10c0 .693.037 1.362.104 2h5.792c.067-.638.104-1.307.104-2 0-.693-.037-1.362-.104-2H7.104Zm5.454-2H7.442c.173-.732.392-1.392.643-1.958.328-.738.693-1.273 1.047-1.61C9.482 2.099 9.773 2 10 2c.227 0 .518.1.868.432.354.337.719.872 1.047 1.61.251.566.47 1.226.643 1.958Zm2.348 2a21.027 21.027 0 0 1 0 4h2.842c.165-.64.252-1.31.252-2s-.087-1.36-.252-2h-2.842Zm2.024-2h-2.323a13.703 13.703 0 0 0-.865-2.77 9.78 9.78 0 0 0-.188-.399A8.036 8.036 0 0 1 16.93 6ZM6.446 17.169A8.036 8.036 0 0 1 3.07 14h2.323c.212 1.023.505 1.96.865 2.77.06.136.123.269.188.399Zm1.64-1.211A11.237 11.237 0 0 1 7.441 14h5.116a11.238 11.238 0 0 1-.643 1.958c-.328.738-.693 1.273-1.047 1.61-.35.333-.641.432-.868.432-.227 0-.518-.1-.868-.432-.354-.337-.719-.872-1.047-1.61Zm5.656.812c.36-.81.653-1.747.865-2.77h2.323a8.036 8.036 0 0 1-3.376 3.169c.065-.13.128-.263.188-.399Z"
      fill={props.color || "#6F767E"}
      fillRule="evenodd"
    />
  </svg>
);

export default InternetLight;
