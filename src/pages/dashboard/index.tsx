import Responsive from "@src/components/responsive";
import { LoginPath } from "@src/constant";
import { useUserInfo } from "@src/hooks/use_user_info";
import userModel from "@src/model/user";
import MenuDesktop from "@src/pages/dashboard/menu_desktop";
import MenuMobile from "@src/pages/dashboard/menu_mobile";
import RouterPro from "@src/pages/dashboard/router";
import { Layout } from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./index.scoped.scss";

export default function Dashboard() {
  const userInfo = useUserInfo();
  const history = useHistory();

  useEffect(() => {
    if (!userModel.isLogin) {
      history.push(LoginPath);
    }
  }, [history]);

  useEffect(() => {
    console.log("debug userInfo", userInfo);
    // 判断 isLogin
  }, [userInfo]);

  const handleExit = () => {
    userModel.clearToken();
    history.push(LoginPath);
  };

  if (!userModel.isLogin) {
    return null;
  }

  return (
    <Layout className="dashboard-box">
      <Responsive mobile={<MenuMobile />} desktop={<MenuDesktop />} />
      <Layout className="dashboard-content">
        <RouterPro />
      </Layout>
    </Layout>
  );
}
