import { menuSiderAtom } from "@src/recoil/menu_mobile";
import { Badge } from "antd";
import {
  MenuLight,
  MessageLight,
  NotificationLight,
  SearchLight,
} from "maple-icons";
import React from "react";
import { useSetRecoilState } from "recoil";
import "./index.scoped.scss";

export default function HeaderMobile() {
  const setIsOpen = useSetRecoilState(menuSiderAtom);
  return (
    <div className="header flex justify-around items-center">
      <MenuLight
        width={20}
        height={20}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <SearchLight width={20} height={20} />
      <Badge dot>
        <MessageLight width={20} height={20} />
      </Badge>
      <Badge dot>
        <NotificationLight width={20} height={20} />
      </Badge>
    </div>
  );
}
