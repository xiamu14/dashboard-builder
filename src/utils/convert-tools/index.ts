/**
 * @description  一系列数据转换的工具函数
 */

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
export { default as convertUnit } from "./convert-unit";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 *
 * @param type 枚举分类，date ｜ time
 * @param timestamp 时间戳
 */
export function convertTimestamp(
  type: "date" | "time",
  timestamp: string | number,
  format?: string
) {
  try {
    const finalFormat =
      format || (type === "date" ? "YYYY/MM/DD" : "YYYY/MM/DD HH:mm:ss");
    const result = dayjs(timestamp).format(finalFormat);
    return result;
  } catch (error) {
    console.error(error); // 控制台提示错误
    return "-"; // 前端显示，防止异常
  }
}

export function convertUtcTime(
  type: "date" | "time",
  utcTime: string,
  format?: string
) {
  try {
    const finalFormat =
      format || (type === "date" ? "YYYY/MM/DD" : "YYYY/MM/DD HH:mm:ss");
    const result = dayjs.utc(utcTime).format(finalFormat);
    return result;
  } catch (error) {
    console.error(error); // 控制台提示错误
    return "-"; // 前端显示，防止异常
  }
}

// 通常用于返回给服务端
export function convertToUtc(time: string) {
  try {
    const result = dayjs.utc(time);
    return result;
  } catch (error) {
    console.error(error); // 控制台提示错误
  }
}

// 这个特例处理吧
export function convertUtcTimeInZone(
  type: "date" | "time",
  timestamp: string | number,
  format?: string
) {
  dayjs.extend(timezone);
  const currentTimezone = dayjs.tz.guess();
  // console.log("debug timezone", currentTimezone);
  try {
    const finalFormat =
      format || (type === "date" ? "YYYY/MM/DD" : "YYYY/MM/DD HH:mm:ss");
    const result = dayjs.utc(timestamp).tz(currentTimezone).format(finalFormat);
    return result;
  } catch (error) {
    console.error(error); // 控制台提示错误
    return "-"; // 前端显示，防止异常
  }
}
