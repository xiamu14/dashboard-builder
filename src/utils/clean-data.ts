import { cloneDeep } from "lodash-es";

type BlackList = ("" | 0 | "undefined" | "null" | undefined | null)[];

/**
 *
 * @param data 需要清洗的数据
 * @param BlackList 要删除的黑名单
 * @returns 清洗后的数据
 */
export default function cleanData(
  data: Record<string, any>,
  blackList: BlackList
) {
  const cloneData = cloneDeep(data);
  Object.keys(cloneData).forEach((key) => {
    if (blackList.includes(cloneData[key])) {
      delete cloneData[key];
    }
  });
  return cloneData;
}
