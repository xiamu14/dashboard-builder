import StorageBase from "@redchili/storage-util";

export interface SessionProps {
  keep: any;
}

export type SessionKey = keyof SessionProps;

const sessionUtil = new StorageBase<SessionProps>("sessionStorage");

export default sessionUtil;
