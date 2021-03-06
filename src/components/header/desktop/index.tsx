import { randomColor } from "@src/utils/random_color";
import { Avatar, Badge, Space } from "antd";
import {
  AddLight,
  MessageLight,
  NotificationLight,
  SearchLight,
} from "maple-icons";
import React from "react";
import "./index.scoped.scss";

const HeaderDesktop = () => {
  return (
    <div className="header flex justify-between items-center">
      <div className="search-bar flex items-center">
        <SearchLight />
        <input placeholder="Search or type a command" />
      </div>
      <Space size="large">
        <div className="btn-create flex justify-center items-center">
          <AddLight color="#ffffff" />
          <span className="text">Create</span>
        </div>
        <Badge dot>
          <MessageLight width={20} height={20} />
        </Badge>
        <Badge dot>
          <NotificationLight width={20} height={20} />
        </Badge>
        <Avatar
          style={{
            backgroundColor: randomColor("secondary-0", 5),
          }}
          size={42}
          src="https://joeschmoe.io/api/v1/random"
        />
      </Space>
    </div>
  );
};

export default HeaderDesktop;
