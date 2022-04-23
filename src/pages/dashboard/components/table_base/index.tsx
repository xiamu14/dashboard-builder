import { Table } from "@antd-hero/components";
import ContentBox from "@src/components/content_box";
import { Space, TableColumnsType, Tag } from "antd";
import React from "react";
import "./index.scoped.scss";

interface User {
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default function TableBase() {
  const columns: TableColumnsType<User> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Life Process",
      dataIndex: "lifeProcess",
      key: "lifeProcess",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const fetchTableData = async () => {
    return {
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          lifeProcess: "00.1",
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          lifeProcess: 1,
          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          lifeProcess: 0.01,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
      ],
      total: 3,
    };
  };

  return (
    <ContentBox>
      <div className="h-full max-h-full overflow-y-scroll">
        <div className="grid">
          <div className="grid-item-1" />
          <div className="grid-item-2" />
          <div className="grid-item-3" />
          <div className="grid-item-4">
            <Table
              rowKey="key"
              columns={columns}
              fetchTableData={fetchTableData}
            />
          </div>
        </div>
      </div>
    </ContentBox>
  );
}
