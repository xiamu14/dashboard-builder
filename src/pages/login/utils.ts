export const createWechatLoginUrl = (params: {
  appid: string;
  redirectUri: string;
}) => {
  const wechatLogin = {
    host: "https://open.weixin.qq.com/connect/qrconnect",
    query: {
      appid: params.appid, //
      scope: "snsapi_base",
      redirect_uri: params.redirectUri,
      state: Date.now(),
      login_type: "jssdk",
      self_redirect: false,
    },
  };

  const { query, host } = wechatLogin;
  // NOTE: 拼接 query
  type QueryKey = keyof typeof query;
  const queryString: string[] = [];
  Object.keys(query).forEach((key) => {
    queryString.push(`${key}=${wechatLogin.query[key as QueryKey]}`);
  });
  // NOTE: 拼接完整地址
  const url = `${host}?${queryString.join("&")}`;
  return url;
};
