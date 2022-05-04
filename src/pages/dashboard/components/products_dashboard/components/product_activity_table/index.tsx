import Tag from "@src/components/tag";
import TrendTips from "@src/components/trend_tips";
import { Table, TableColumnsType } from "antd";
import React, { memo } from "react";
import "./index.scss";

interface TrendType {
  current: string;
  isRise?: boolean;
  percent?: number;
}

interface DataItemType {
  key: string;
  week: string;
  products: TrendType;
  views: TrendType;
  likes: TrendType;
  comments: TrendType;
}

const data: DataItemType[] = [
  {
    key: "1",
    week: "25 Sep - 1 Oct",
    products: { current: "8", isRise: true, percent: 37.8 },
    views: { current: "24k", isRise: true, percent: 37.8 },
    likes: { current: "48", isRise: false, percent: 37.8 },
    comments: { current: "16", isRise: false, percent: 37.8 },
  },
  {
    key: "2",
    week: "18 Sep - 24 Oct",
    products: { current: "38" },
    views: { current: "26k" },
    likes: { current: "48" },
    comments: { current: "16" },
  },
];

const columns: TableColumnsType<DataItemType> = [
  {
    title: "Week",
    dataIndex: "week",
    key: "week",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Products",
    dataIndex: "products",
    key: "products",
    render: (products: TrendType) => {
      return Trend(products);
    },
  },
  {
    title: "Views",
    dataIndex: "views",
    key: "views",
    render: (views: TrendType) => {
      return Trend(views);
    },
  },
  {
    title: "Likes",
    dataIndex: "likes",
    key: "likes",
    render: (likes: TrendType) => {
      return Trend(likes);
    },
  },
  {
    title: "Comments",
    key: "comments",
    dataIndex: "comments",
    render: (comments: TrendType) => {
      return Trend(comments);
    },
  },
];

const ProductActivityTable = memo(() => {
  return (
    <div className="product-activity-table">
      <Table dataSource={data} columns={columns} pagination={false} />
    </div>
  );
});

export default ProductActivityTable;

function Trend(trendData: TrendType) {
  return (
    <div className="flex justify-start items-center">
      <Tag className="mr-4px">{trendData.current}</Tag>
      {trendData.isRise !== undefined && (
        <TrendTips
          percent={trendData.percent as number}
          isRise={trendData.isRise}
          style={{ backgroundColor: "transparent" }}
        />
      )}
    </div>
  );
}
