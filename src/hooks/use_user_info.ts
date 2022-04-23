import userModel, { UserInfo } from "@src/model/user";
import { useEffect, useState } from "react";

export function useUserInfo() {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>();

  useEffect(() => {
    if (userModel.userInfo) {
      setUserInfo(userModel.userInfo);
    } else {
      // NOTE: 页面逻辑限定了非登录态不会流转到这里
      if (userModel.isLogin) {
        // TODO: 从接口更新用户数据
      }
    }
  }, []);

  return userInfo;
}
