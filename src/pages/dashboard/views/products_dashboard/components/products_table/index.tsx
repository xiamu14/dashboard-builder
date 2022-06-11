import ActiveTag from "@src/components/active_tag";
import Tag from "@src/components/tag";
import Trend from "@src/components/trend";
import { TrendType } from "@src/components/trend/types";
import productImagesState from "@src/recoil/product_images";
import { Table, TableColumnsType } from "antd";
import React, { memo, useMemo } from "react";
import { useRecoilValue } from "recoil";
import "./index.scoped.scss";

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

const columns: TableColumnsType<ProductType> = [
  {
    title: "Product",
    dataIndex: "product",
    render: (product) => {
      return (
        <div className="product-box flex justify-start items-center">
          <div className="product-image-box">
            <img src={product.image} />
          </div>
          <div>
            <p className="name">{product.name}</p>
            <p className="desc">{product.desc}</p>
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
  const productImages = useRecoilValue(productImagesState);

  const fullDataSource = useMemo(() => {
    if (productImages.length > 0) {
      return new Array(6).fill(null).map((_, index) => {
        return {
          key: `${index}`,
          product: {
            image: productImages[index].urls.regular,
            name: "Bento Matte 3D Illustration",
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
    }
    return [];
  }, [productImages]);

  return (
    <Table
      dataSource={fullDataSource}
      columns={columns}
      pagination={{ size: "small", hideOnSinglePage: true }}
      rowKey="key"
      rowSelection={{}}
    />
  );
});

export default ProductsTable;
