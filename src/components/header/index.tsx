import { Avatar, Badge, Space } from "antd";
import AddLight from "maple-icons/dist/add_light";
import MessageLight from "maple-icons/dist/message_light";
import NotificationLight from "maple-icons/dist/notification_light";
import SearchLight from "maple-icons/dist/search_light";
import React from "react";
import "./index.coped.scss";
const Header = () => {
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
        <Avatar size={42} src="https://joeschmoe.io/api/v1/random" />
      </Space>
    </div>
  );
};

export default React.memo(Header);
