import Tag from "@src/components/tag";
import { colors } from "@src/constant";
import { Table, TableColumnsType } from "antd";
import React, { memo } from "react";
import "./index.scss";
interface DataItemType {
  key: string;
  week: string;
  trend: string;
  views: string;
  likes: string;
  comments: string[];
}

const data = [
  {
    key: "1",
    week: "John Brown",
    trend: "00.1",
    views: "New York No. 1 Lake Park",
    likes: "12",
    comments: ["nice"],
  },
  {
    key: "2",
    week: "John Brown",
    trend: "00.1",
    views: "New York No. 1 Lake Park",
    likes: "22",
    comments: ["nice"],
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
    dataIndex: "trend",
    key: "trend",
  },
  {
    title: "Views",
    dataIndex: "views",
    key: "views",
  },
  {
    title: "Likes",
    dataIndex: "likes",
    key: "likes",
  },
  {
    title: "Comments",
    key: "comments",
    dataIndex: "comments",
    render: (tags: string[]) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? colors["secondary-05"] : undefined;
          if (tag === "loser") {
            color = undefined;
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
];

const ProductActivityTable = memo(() => {
  return (
    <div className="product-activity-table">
      <Table dataSource={data} columns={columns} pagination={false} />
    </div>
  );
});

export default ProductActivityTable;
