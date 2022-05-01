import { DashboardEntryPath, LoginPath } from "@src/constant";
import userModel from "@src/model/user";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

/**
 * 根据用户 token 状态跳转
 * @returns
 */
export default function Home() {
  const history = useHistory();
  useEffect(() => {
    if (userModel.isLogin) {
      history.push(DashboardEntryPath);
    } else {
      // TODO: 这里应该是扫码登陆页面
      history.push(LoginPath);
    }
  }, [history]);
  return <div />;
}
