import ActiveTag from "@src/components/active_tag";
import Responsive from "@src/components/responsive";
import Tag from "@src/components/tag";
import Trend from "@src/components/trend";
import { TrendType } from "@src/components/trend/types";
import productImagesState from "@src/recoil/product_images";
import { Table, TableColumnsType } from "antd";
import { LoaderFilled } from "maple-icons";
import React, { memo, useCallback, useMemo, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import { useRecoilValue } from "recoil";
import "./index.scoped.scss";
import ProductTableItem from "./product_table_item";
import { ProductDetail } from "./types";

const columns: TableColumnsType<ProductDetail> = [
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

const TableMobile = React.memo(({ data }: { data: ProductDetail[] }) => {
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(6);
  const itemContentFn = useCallback(
    (index) => (
      <ProductTableItem detail={data[index % 6]} isLast={index % 6 === 5} />
    ),
    [data]
  );

  const loadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      // eslint-disable-next-line max-nested-callbacks
      setTotalCount((prev) => prev + 6);
      setLoading(false);
    }, 300);
  }, []);

  const Footer = React.memo(() => {
    return (
      <div className="load-more">
        <button disabled={loading} onClick={loadMore}>
          {loading ? (
            <p className="loading">
              <LoaderFilled />
              Loading...
            </p>
          ) : (
            "load more"
          )}
        </button>
      </div>
    );
  });
  return (
    <Virtuoso
      style={{ height: "400px" }}
      totalCount={totalCount}
      itemContent={itemContentFn}
      components={{
        Footer,
      }}
    />
  );
});

const ProductsTable = memo(() => {
  const productImages = useRecoilValue(productImagesState);

  const fullDataSource = useMemo<ProductDetail[]>(() => {
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
            current: "$3,200",
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
    <Responsive
      desktop={
        <Table
          dataSource={fullDataSource}
          columns={columns}
          pagination={{ size: "small", hideOnSinglePage: true }}
          rowKey="key"
        />
      }
      mobile={<TableMobile data={fullDataSource} />}
    />
  );
});

export default ProductsTable;
