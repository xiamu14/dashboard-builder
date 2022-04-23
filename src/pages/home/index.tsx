import { DashboardEntryPath, LoginPath } from "@src/constant";
import userModel from "@src/model/user";
import React, { useEffect } from "react";

/**
 * 根据用户 token 状态跳转
 * @returns
 */
export default function Home() {
  useEffect(() => {
    if (userModel.isLogin) {
      window.location.href = `/#${DashboardEntryPath}`;
    } else {
      // TODO: 这里应该是扫码登陆页面
      window.location.href = `/#${LoginPath}`;
    }
  }, []);
  return <div />;
}
