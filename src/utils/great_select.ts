/**
 * @desc 多值选择类
 */
import { isEqual } from "lodash-es";

export default class GreatSelect<T extends Record<string, any>> {
  public data: T[];

  /**
   * 定义具有多值的枚举属性类
   * @param data
   */
  public constructor(data: T[]) {
    this.data = data;
  }

  /**
   * 获取数组中此键名的值组成的数组
   * @param key
   */
  public values(key: keyof T) {
    const result = this.data.map((item) => item[key]);
    return result;
  }

  /**
   * 根据特定的 key value 获取到数组子项
   * @param key
   * @param val
   */

  public item(key: keyof T, value: T[typeof key]) {
    const result = this.data.find((item: T) => isEqual(item[key], value));
    return result;
  }
}
