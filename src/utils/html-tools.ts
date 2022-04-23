import { cloneDeep } from "lodash-es";
import xss, { whiteList } from "xss";

const imgPattern = /<img(.*?)src="(.*?)"(.*?)>/gi;

const whiteListWithStyle = cloneDeep(whiteList);

for (const prop in whiteListWithStyle) {
  if (whiteListWithStyle.hasOwnProperty(prop)) {
    whiteListWithStyle[prop]?.push("style", "class");
  }
}

export function xssFilter(html: string) {
  const options = {
    whiteList: whiteListWithStyle,
  }; // Custom rules
  const result = xss(html, options);
  return result;
}

// 用于给 富文本 html 解析的；利用原生 dom 操作方法
export function htmlParse(html: string) {
  const boxEl = document.createElement("div");
  boxEl.innerHTML = html;
  const imgsEl = boxEl.querySelectorAll("img");
  imgsEl.forEach((imgEl) => {
    const parentEl = imgEl.closest("p");
    parentEl?.classList.add("ming-img-box");
  });

  return boxEl.innerHTML;
}
