/**
 * @description 获取 hash 里的 searchParams ： http://www.xxx.com/#/home?userid=xxxxx => {userId:xxxx}
 * @returns
 */

export function getHashParams<T>(): T | undefined {
  const url = new URL(window.location.href);
  if (url.hash) {
    const params = url.hash.split("?")[1];
    if (params && params !== "") {
      const searchParams = params.split("&").reduce((res: any, item) => {
        const parts = item.split("=");
        res[parts[0]] = parts[1];
        return res;
      }, {});
      return searchParams as T;
    }
    return undefined;
  }
  return undefined;
}
