import { ExportOutlined, UserOutlined } from "@ant-design/icons";
import { LoginPath } from "@src/constant";
import { useUserInfo } from "@src/hooks/use_user_info";
import userModel from "@src/model/user";
import RouterPro from "@src/pages/dashboard/router";
import { Layout, Popconfirm } from "antd";
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
      <Sider className="dashboard-sider" width={340}>
        <div className="sider-logo" />
        <div className="menu-box overflow-y-scroll overflow-x-hidden">
          <MenuPro />
        </div>
        {userInfo ? (
          <div className="info-box">
            <div className="info">
              <UserOutlined />
            </div>
            <Popconfirm
              title="你确定要退出吗？"
              onConfirm={handleExit}
              placement="rightBottom"
              okText="确定"
              cancelText="取消"
            >
              <ExportOutlined className="btn-exit" />
            </Popconfirm>
          </div>
        ) : null}
      </Sider>
      <Layout className="dashboard-content">
        <RouterPro />
      </Layout>
    </Layout>
  );
}
