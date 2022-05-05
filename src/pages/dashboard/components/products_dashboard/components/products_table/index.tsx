import ActiveTag from "@src/components/ActiveTag";
import Tag from "@src/components/tag";
import Trend from "@src/components/trend";
import { TrendType } from "@src/components/trend/types";
import { Table, TableColumnsType } from "antd";
import React, { memo } from "react";

interface ProductType {
  key: string;
  product: {
    image: string;
    name: string;
    desc: string;
  };
  status: { isActive: boolean };
  price: string;
  sales: {
    current: string;
    isRise: boolean;
    percent: number;
  };
  views: string;
  likes: string;
}

const data: ProductType[] = new Array(6).fill(null).map((_, index) => {
  return {
    key: `${index}`,
    product: {
      image: "",
      name: "Bento Matte 3D",
      desc: "UI design kit",
    },
    status: { isActive: true },
    price: "$48",
    sales: {
      current: "#3,200",
      isRise: true,
      percent: 55.8,
    },
    views: "48k",
    likes: "8",
  };
});

const columns: TableColumnsType<ProductType> = [
  {
    title: "Product",
    dataIndex: "product",
    render: (product) => {
      return (
        <div className="flex justify-start items-center">
          <div />
          <div>
            <p>{product.name}</p>
            <p>{product.desc}</p>
          </div>
        </div>
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => {
      return <ActiveTag isActive={status.isActive} />;
    },
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Sales",
    dataIndex: "sales",
    render: (scales: TrendType) => {
      return Trend(scales);
    },
  },
  {
    title: "Views",
    dataIndex: "views",
    render: (views) => {
      return <Tag>{views}</Tag>;
    },
  },
  {
    title: "Likes",
    dataIndex: "likes",
    render: (likes) => {
      return <Tag>{likes}</Tag>;
    },
  },
];

const ProductsTable = memo(() => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ size: "small", hideOnSinglePage: true }}
      rowKey="key"
    />
  );
});

export default ProductsTable;
