import BlockHeader from "@src/components/block_header";
import ContentBox from "@src/components/content_box";
import CustomerPart from "@src/components/customer_part";
import ShareBySocial from "@src/components/share_by_social";
import ShopItem from "@src/components/shop_item";
import { colors } from "@src/constant";
import { ShopDetail } from "@src/model/shop";
import TrafficChannelStatistic from "@src/pages/dashboard/views/customers_overview/components/traffic_channel_statistic";
import productImagesState from "@src/recoil/product_images";
import { Divider } from "antd";
import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import CustomerStatistic from "./components/customers_statistic";
import "./index.scoped.scss";

const ShareProducts = React.memo(() => {
  const productImages = useRecoilValue(productImagesState);

  const fullDataSource = useMemo<ShopDetail[]>(() => {
    if (productImages.length > 0) {
      const dataSource = new Array(2).fill(null).map((_, index) => {
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
    <div className="flex justify-around mb-1">
      {fullDataSource.map((item) => {
        return <ShopItem key={item.key} item={item} />;
      })}
    </div>
  );
});

const CustomersOverview = React.memo(() => {
  return (
    <ContentBox title="Customer" className="overflow-y-scroll">
      <div className="area-box grid">
        <div className="area-item">
          <div className="grid">
            <div className="item dashboard-card-block">
              <BlockHeader bgColor={colors["secondary-01"]} title="Overflow" />
              <div className="content-box">
                <CustomerStatistic />
                <CustomerPart />
              </div>
            </div>
            <div className="item dashboard-card-block">
              <BlockHeader
                bgColor={colors["secondary-02"]}
                title="Traffic channel"
              />
              <div className="content-box">
                <TrafficChannelStatistic />
              </div>
            </div>
            <div className="item dashboard-card-block">
              <BlockHeader
                bgColor={colors["secondary-03"]}
                title="Share your products"
              />
              <div className="content-box">
                <ShareProducts />
                <Divider />
                <ShareBySocial />
              </div>
            </div>
          </div>
        </div>
        <div className="area-item" />
      </div>
    </ContentBox>
  );
});

export default CustomersOverview;
