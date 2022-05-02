import BlockHeader from "@src/components/block_header";
import ContentBox from "@src/components/content_box";
import Statistic from "@src/components/statistic";
import { colors } from "@src/constant";
// import { Table } from "antd";
import { Space, Table, TableColumnsType, Tag } from "antd";
import { ActivityLight, PaymentLight, ShoppingBagLight } from "maple-icons";
import React from "react";
import ProductActivityTable from "./components/product_activity_table";
import ProductViewsBarChart from "./components/product_views_bar_chart";
import "./index.scoped.scss";

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

export default function ProductsDashboard() {
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
    <ContentBox title="Products dashboard" className=" overflow-y-scroll">
      <div className="grid">
        <div className="grid-item-1 atom-desktop-block">
          <BlockHeader bgColor={colors["secondary-02"]} title="Overview" />
          <div className="statistic-box flex justify-between">
            <Statistic
              icon={
                <ActivityLight
                  color={colors["neutral-01"]}
                  width={20}
                  height={20}
                />
              }
              width="31%"
              height="70%"
              bgColor={colors["secondary-04"]}
              lineChartProps={{ stroke: colors["primary-02"] }}
              info="Earing"
              number="128"
              trendTipsProps={{
                isRise: false,
                percent: 34.5,
                desc: "this week",
              }}
            />
            <Statistic
              icon={
                <PaymentLight
                  color={colors["neutral-01"]}
                  width={20}
                  height={20}
                />
              }
              bgColor={colors["secondary-03"]}
              width="31%"
              height="70%"
              lineChartProps={{ stroke: colors["primary-01"] }}
              info="Customer"
              number="128"
              trendTipsProps={{
                isRise: true,
                percent: 34.5,
                desc: "this week",
              }}
            />
            <Statistic
              icon={
                <ShoppingBagLight
                  color={colors["neutral-01"]}
                  width={20}
                  height={20}
                />
              }
              bgColor={colors["secondary-02"]}
              width="31%"
              height="70%"
              lineChartProps={{ stroke: colors["primary-04"] }}
              info="Payouts"
              number="128"
              trendTipsProps={{
                isRise: true,
                percent: 34.5,
                desc: "this week",
              }}
            />
          </div>
        </div>
        <div className="grid-item-2 atom-desktop-block">
          <BlockHeader
            bgColor={colors["secondary-04"]}
            title="Product activity"
          />
          <ProductActivityTable />
        </div>
        <div className="grid-item-3 atom-desktop-block">
          <BlockHeader bgColor={colors["secondary-03"]} title="Product views" />
          <div className="w-full h-180px">
            <ProductViewsBarChart />
          </div>
        </div>
        <div className="grid-item-4 atom-desktop-block">
          <BlockHeader bgColor={colors["secondary-02"]} title="Products" />
          <div className="flex-1">
            <Table
              rowKey="key"
              columns={columns}
              dataSource={data}
              pagination={{ size: "small", hideOnSinglePage: true }}
            />
          </div>
        </div>
      </div>
    </ContentBox>
  );
}
