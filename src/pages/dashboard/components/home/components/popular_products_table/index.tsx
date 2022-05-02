import Button from "@src/components/button";
import Tag from "@src/components/tag";
import { colors } from "@src/constant";
import { randomColor } from "@src/utils/random_color";
import { Table, TableColumnsType } from "antd";
import React, { memo } from "react";
import "./index.scoped.scss";
interface ProductType {
  key: string;
  cover: string;
  title: string;
  earning: string;
  isActive: boolean;
}

const dataSource: ProductType[] = [
  {
    key: "0",
    cover: "https://source.unsplash.com/128x128/?product",
    title: "Crypter - NFT UI kit",
    earning: "$2,453.80",
    isActive: true,
  },
  {
    key: "1",
    cover: "https://source.unsplash.com/128x128/?product",
    title: "Bento Matte 3D illustration 1.0",
    earning: "$105.60",
    isActive: false,
  },
  {
    key: "2",
    cover: "https://source.unsplash.com/128x128/?product",
    title: "Excellent material 3D chair",
    earning: "$648.60",
    isActive: true,
  },
  {
    key: "3",
    cover: "https://source.unsplash.com/128x128/?product",
    title: "Fleet - travel shopping kit",
    earning: "$648.60",
    isActive: false,
  },
];

const columns: TableColumnsType<ProductType> = [
  {
    title: "Products",
    dataIndex: "cover",
    render: (cover, record) => {
      return (
        <div className="flex justify-start items-center">
          <img
            src={`${cover}&t=${record.key}`}
            alt={record.title}
            className="product-cover"
            style={{ backgroundColor: randomColor("secondary-0", 5) }}
          />
          <p className="product-title">{record.title}</p>
        </div>
      );
    },
  },
  {
    title: "Earning",
    dataIndex: "earning",
    render: (earning, record) => {
      return (
        <div className="flex flex-col justify-center items-center">
          <span className="product-earning">{earning}</span>
          <Tag
            color={
              record.isActive ? colors["secondary-04"] : colors["secondary-01"]
            }
          >
            <span
              style={{
                color: record.isActive
                  ? colors["primary-02"]
                  : colors["primary-03"],
              }}
            >
              {record.isActive ? "Active" : "Deactive"}
            </span>
          </Tag>
        </div>
      );
    },
  },
];

const PopularProductsTable = memo(() => {
  return (
    <div className="w-full">
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      <Button className="!w-full" plain>
        All products
      </Button>
    </div>
  );
});

export default PopularProductsTable;
