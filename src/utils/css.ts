import { CSSProperties } from "react";

function componentToHex(c: number) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex: string) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : undefined;
}

export function rgba(hex: string, opacity: number) {
  const rgb = hexToRgb(hex);
  if (rgb) {
    return `rgba(${rgb.r},  ${rgb.g}, ${rgb.b}, ${opacity})`;
  } else {
    throw new Error("invalid hex string");
  }
}

function toCamel(str: string) {
  return str.replace(/^-/, "").replace(/-(\w)(\w+)/g, (_, b, c) => {
    return b.toUpperCase() + c.toLowerCase();
  });
}

export function cssTemplate(
  staticContent: TemplateStringsArray,
  ...dynamic: string[]
) {
  let res = "";
  for (let i = 0; i < staticContent.length; i += 1) {
    res += `${staticContent[i]}${
      i < staticContent.length - 1 ? dynamic[i] : ""
    }`;
  }
  const tmp = res.trim();
  const tmpArr = tmp.split(";");
  const result: Record<string, any> = {};
  tmpArr.forEach((item) => {
    if (item) {
      const arr = item.split(":");
      result[toCamel(arr[0]).trim()] = arr[1].trim();
    }
  });
  return result as CSSProperties;
}

export function pxToRem(w: number) {
  const screenWidth = window.innerWidth;
  const media = {
    mobile: {
      breakPoint: 500,
      rootValue: 37.5,
    },
    desktop: {
      rootValue: 144,
    },
  };
  if (screenWidth <= media.mobile.breakPoint) {
    const remValue = (w / media.mobile.rootValue).toFixed(3);
    return `${remValue}rem`;
  } else {
    const remValue = (w / media.desktop.rootValue).toFixed(3);
    return `${remValue}rem`;
  }
}
