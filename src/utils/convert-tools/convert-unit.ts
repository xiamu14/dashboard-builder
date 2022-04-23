/**
 * 转换数值的单位，使其更易读
 * @param value number
 * @returns string
 */

export default function convertUnit(value: number, dot?: number) {
  let newValue = ["", "", ""];
  let fr = 1000;
  const ad = 1;
  let num = 3;
  const fm = 1;
  while (value / fr >= 1) {
    fr *= 10;
    num += 1;
    // console.log('数字', value / fr, 'num:', num);
  }
  if (num <= 4) {
    // 千
    newValue[1] = "千";
    newValue[0] = String(Math.ceil(value / 1000));
  } else if (num <= 8) {
    // 万
    const text1 = Math.ceil(num - 4) / 3 > 1 ? "千万" : "万";
    // tslint:disable-next-line:no-shadowed-variable
    const fm = text1 === "万" ? 10000 : 10000000;
    newValue[1] = text1;
    newValue[0] = String(value / fm);
  } else if (num <= 16) {
    // 亿
    let text1 = (num - 8) / 3 > 1 ? "千亿" : "亿";
    text1 = (num - 8) / 4 > 1 ? "万亿" : text1;
    text1 = (num - 8) / 7 > 1 ? "千万亿" : text1;
    // tslint:disable-next-line:no-shadowed-variable
    let fm = 1;
    if (text1 === "亿") {
      fm = 100000000;
    } else if (text1 === "千亿") {
      fm = 100000000000;
    } else if (text1 === "万亿") {
      fm = 1000000000000;
    } else if (text1 === "千万亿") {
      fm = 1000000000000000;
    }
    newValue[1] = text1;
    newValue[0] = String(Math.ceil(value / fm));
  }
  if (value < 1000) {
    newValue[1] = "";
    newValue[0] = String(value);
  }

  newValue[0] = String(parseFloat(newValue[0]).toFixed(dot));
  return newValue.join("");
}
