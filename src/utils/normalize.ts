// 标准化 JSON 字符串
export function normalizeJsonString(json: string) {
  try {
    const data = JSON.parse(json);
    return { isValid: true, error: null, json, data };
  } catch (error) {
    return { isValid: false, error: error, json, data: undefined };
  }
}

// 标准化 url，方便获取 hostname ，query 等
export function normalizeUrl(url: string) {
  try {
    const urlObject = new URL(url);
    return { isValid: true, error: null, url, data: urlObject };
  } catch (error) {
    return { isValid: false, error: error, url, data: undefined };
  }
}
