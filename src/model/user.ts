import config from "@src/config";
import localUtil from "@src/utils/storage/local";

/**
 * alias: ""
id: "1"
isActive: true
role: "Admin"
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxfQ.0KbCbWidAPV7gKDzE-SKheiVAfZQbXlbkwMRAnppe_Y"
wxOpenId: "100:oCWwswnTJtFpXFp9gmS6ySVf1-qU"
 */

export interface UserInfo {
  id: string;
  alias: string;
  isActive: boolean;
  role: "Admin";
  token: string;
  wxOpenId?: string;
}

class UserModel {
  private info: UserInfo | undefined = undefined;
  private token = "";

  public constructor() {
    const token = localUtil.getItem("authToken") ?? "";
    if (config.debugToken) {
      this.token = config.debugToken;
    } else {
      this.token = token;
    }
    const userInfoString = localUtil.getItem("userInfo");
    try {
      const userInfo = JSON.parse(userInfoString);
      this.info = userInfo;
    } catch (error) {
      // TODO：判断 token 存在，则调用接口获取 userInfo，再设置
      if (token) {
        console.warn(
          "userInfo is invalid, please update userInfo by useUserInfo hook function."
        );
      }
    }
  }

  public get isLogin() {
    // NOTE: 可能还会需要检查是否过期
    return !!this.token;
  }

  public get userToken(): string {
    return this.token;
  }

  public set userToken(token: string) {
    localUtil.setItem("authToken", token);
    this.token = token;
  }

  public get userInfo(): UserInfo | undefined {
    return this.info;
  }

  public set userInfo(info: UserInfo | undefined) {
    this.info = info;
  }

  public clearToken() {
    localUtil.removeItem("authToken");
    this.token = "";
  }
}

const userModel = new UserModel();

export default userModel;
