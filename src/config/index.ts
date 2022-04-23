const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  runtimeEnv: import.meta.env.VITE_RUNTIME_ENV, // 运行时环境变量，dev/alpha/production
  debugToken: import.meta.env.VITE_DEBUG_TOKEN, // 调试时 token，跳过登陆流程
  isDev: import.meta.env.VITE_RUNTIME_ENV === "dev",
  isProduction: import.meta.env.VITE_RUNTIME_ENV === "production",
  wechatLoginUrlInfo: {
    // 微信扫码登录 iframe 链接所需的信息
    appid: "wx6114f2ab0d2dc2b0",
    redirectUri:
      encodeURIComponent(``) +
      encodeURIComponent(
        encodeURIComponent(`${import.meta.env.VITE_SITE_URL}/#/login`)
      ),
  },
};

// console.log("--config", config);

export default config;
