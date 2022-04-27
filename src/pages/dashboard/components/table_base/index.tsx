import BlockHeader from "@src/components/block_header";
import ContentBox from "@src/components/content_box";
import Statistic from "@src/components/statistic";
import { colors } from "@src/constant";
// import { Table } from "antd";
import { Space, Table, TableColumnsType, Tag } from "antd";
import React from "react";
import "./index.scoped.scss";
import ProductViewsBarChart from "./product_views_bar_chart";

interface User {
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const data = [
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
];

export default function TableBase() {
  const columns: TableColumnsType<User> = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Status",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Price",
      dataIndex: "lifeProcess",
      key: "lifeProcess",
    },
    {
      title: "Sales",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Views",
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
      title: "Likes",
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
      data: data,
      total: 3,
    };
  };

  return (
    <ContentBox>
      <div className="h-full max-h-full overflow-y-scroll">
        <div className="grid">
          <div className="grid-item-1 shared-block">
            <BlockHeader bgColor={colors["secondary-02"]} title="Overview" />
            <div className="statistic-box">
              <Statistic />
            </div>
          </div>
          <div className="grid-item-2 shared-block">
            <BlockHeader
              bgColor={colors["secondary-04"]}
              title="Product activity"
            />
          </div>
          <div className="grid-item-3 shared-block">
            <BlockHeader
              bgColor={colors["secondary-03"]}
              title="Product views"
            />
            <div className="w-full h-180px">
              <ProductViewsBarChart />
            </div>
          </div>
          <div className="grid-item-4 shared-block">
            <BlockHeader bgColor={colors["secondary-02"]} title="Products" />
            <div className="flex-1">
              <Table rowKey="key" columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </div>
    </ContentBox>
  );
}
