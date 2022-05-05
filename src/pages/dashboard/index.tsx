import { LoginPath } from "@src/constant";
import { useUserInfo } from "@src/hooks/use_user_info";
import userModel from "@src/model/user";
import RouterPro from "@src/pages/dashboard/router";
import { Layout } from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./index.scoped.scss";
import MenuPro from "./menu";
const { Sider } = Layout;

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
      <Sider
        className="dashboard-sider"
        // width="24%"
        // style={{ maxWidth: "300px" }}
      >
        <div className="sider-logo" />
        <div className="menu-box overflow-y-scroll overflow-x-hidden">
          <MenuPro />
        </div>
      </Sider>
      <Layout className="dashboard-content">
        <RouterPro />
      </Layout>
    </Layout>
  );
}
