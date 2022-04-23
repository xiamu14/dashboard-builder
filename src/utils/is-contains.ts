/**
 * @description 判断某个对象是否存在某个属性（some 满足）
 */
export function isSomeContains(
  standardList: string[],
  targetObject: Record<string, any>
) {
  return standardList.some((it) => it in targetObject);
}

/**
 * @description 判断某个对象是否存在某个属性（every 满足）
 */
export function isEveryContains(
  standardList: string[],
  targetObject: Record<string, any>
) {
  return standardList.every((it) => it in targetObject);
}
