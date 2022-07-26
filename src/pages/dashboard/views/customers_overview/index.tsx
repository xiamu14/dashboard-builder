import BlockHeader from "@src/components/block_header";
import Button from "@src/components/button";
import Comments from "@src/components/comments";
import ContentBox from "@src/components/content_box";
import CustomerPart from "@src/components/customer_part";
import RefundRequestsCard from "@src/components/refund_requests_card";
import ShareBySocial from "@src/components/share_by_social";
import ShopItem from "@src/components/shop_item";
import { colors } from "@src/constant";
import { useMobile } from "@src/hooks/use_responsive";
import { ShopDetail } from "@src/model/shop";
import productImagesState from "@src/recoil/product_images";
import { Divider } from "antd";
import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import CountryStatistic from "./components/country_statistic";
import CustomerStatistic from "./components/customers_statistic";
import DevicePieChart from "./components/device_pie_chart";
import TrafficChannelStatistic from "./components/traffic_channel_statistic";
import "./index.scoped.scss";

const ShareProducts = React.memo(() => {
  const productImages = useRecoilValue(productImagesState);
  const isMobile = useMobile();
  const fullDataSource = useMemo<ShopDetail[]>(() => {
    if (productImages.length > 0) {
      const dataSource = new Array(isMobile ? 2 : 3)
        .fill(null)
        .map((_, index) => {
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
  }, [isMobile, productImages]);
  return (
    <div className="flex justify-between mb-1 gap-1">
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
              <div>
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
        <div className="area-item">
          <div className="grid">
            <div className="item dashboard-card-block">
              <BlockHeader
                bgColor={colors["secondary-01"]}
                title="Refund requests"
              />
              <div>
                <RefundRequestsCard />
              </div>
            </div>
            <div className="item dashboard-card-block">
              <BlockHeader
                bgColor={colors["secondary-03"]}
                title="Top device"
              />
              <div>
                <DevicePieChart />
              </div>
            </div>
            <div className="item dashboard-card-block">
              <BlockHeader
                bgColor={colors["secondary-02"]}
                title="Top country"
              />
              <div>
                <CountryStatistic />
              </div>
            </div>
            <div className="item dashboard-card-block">
              <BlockHeader bgColor={colors["secondary-02"]} title="Message" />
              <div>
                <Comments />
                <Button className="!w-full" plain>
                  View all message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentBox>
  );
});

export default CustomersOverview;
