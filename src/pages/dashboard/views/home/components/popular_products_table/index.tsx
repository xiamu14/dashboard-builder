import ActiveTag from "@src/components/active_tag";
import Button from "@src/components/button";
import productImagesState from "@src/recoil/product_images";
import { randomColor } from "@src/utils/random_color";
import { Table, TableColumnsType } from "antd";
import React, { memo, useMemo } from "react";
import { useRecoilValue } from "recoil";
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
          <ActiveTag isActive={record.isActive} />
        </div>
      );
    },
  },
];

const PopularProductsTable = memo(() => {
  const productImages = useRecoilValue(productImagesState);

  const fullDataSource = useMemo(() => {
    if (productImages.length > 0) {
      return dataSource.map((item, index) => {
        return { ...item, cover: productImages[index].urls.regular };
      });
    }
    return [];
  }, [productImages]);

  return (
    <div className="w-full">
      <Table columns={columns} dataSource={fullDataSource} pagination={false} />
      <Button className="!w-full" plain>
        All products
      </Button>
    </div>
  );
});

export default PopularProductsTable;
