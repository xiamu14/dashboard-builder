import StorageBase from "@redchili/storage-util";

export interface localProps {
  authToken: string; // token
  userInfo: any;
}

export type localKey = keyof localProps;

const localUtil = new StorageBase<localProps>("localStorage");

export default localUtil;
