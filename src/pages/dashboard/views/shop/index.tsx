import Button from "@src/components/button";
import ContentBox from "@src/components/content_box";
import Responsive from "@src/components/responsive";
import ShopItem from "@src/components/shop_item";
import { ShopDetail } from "@src/model/shop";
import productImagesState from "@src/recoil/product_images";
import { randomColor } from "@src/utils/random_color";
import { Avatar, Divider, Space } from "antd";
import { chunk } from "lodash-es";
import { InstagramLight, PinterestLight, TwitterLight } from "maple-icons";
import React, { memo, useMemo } from "react";
import { useRecoilValue } from "recoil";
import "./index.scoped.scss";

const bannerUrl =
  "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80";

const ShopMobile = memo(({ data }: { data: ShopDetail[] }) => {
  return (
    <div className="product-list">
      {data.map((item) => {
        return <ShopItem key={item.key} item={item} />;
      })}
    </div>
  );
});

const ShopDesktop = memo(({ data }: { data: ShopDetail[][] }) => {
  return (
    <div className="product-list w-full flex flex-col justify-center items-center">
      {data.map((itemCol, index) => {
        return (
          <div
            key={index}
            className="col-item flex w-full justify-between items-center"
          >
            {itemCol.map((item) => {
              return <ShopItem key={item.key} item={item} />;
            })}
          </div>
        );
      })}
      <Button plain>Load more</Button>
    </div>
  );
});

export default function Shop() {
  const productImages = useRecoilValue(productImagesState);

  const fullDataSource = useMemo<ShopDetail[]>(() => {
    if (productImages.length > 0) {
      const dataSource = new Array(6).fill(null).map((_, index) => {
        return {
          key: `${index}`,
          cover: productImages[index].urls.regular,
          name: "Fleet - Travel shopping UI design kit",
          stars: 48,
          views: 88,
          price: "$43",
        };
      });
      return dataSource;
    }
    return [];
  }, [productImages]);

  return (
    <div className="shop-box w-full h-full">
      <ContentBox className="shop-wrapper overflow-y-scroll" banner={bannerUrl}>
        <div className="shop-content-box h-full max-h-full ">
          <div className="shopper-info flex justify-start justify-items-auto flex-wrap">
            <Avatar
              size={80}
              style={{
                backgroundColor: randomColor("secondary-0", 5),
              }}
              src="https://joeschmoe.io/api/v1/random"
            />
            <div className="user-info">
              <p className="nickname">Chelsie Haley</p>
              <p className="desc">Dream big. Think different. Do great!</p>
            </div>
            <div className="flex-1" />
            <Space size={30}>
              <TwitterLight width={20} height={20} />
              <InstagramLight width={20} height={20} />
              <PinterestLight width={20} height={20} />
              <Button className="btn-follow">Follow</Button>
            </Space>
          </div>
          <Divider />
          <Responsive
            mobile={<ShopMobile data={fullDataSource} />}
            desktop={<ShopDesktop data={chunk(fullDataSource, 3)} />}
          />
        </div>
      </ContentBox>
    </div>
  );
}
