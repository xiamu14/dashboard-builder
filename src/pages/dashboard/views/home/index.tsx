import BlockHeader from "@src/components/block_header";
import Button from "@src/components/button";
import Comments from "@src/components/comments";
import ContentBox from "@src/components/content_box";
import IconPlate from "@src/components/icon_plate";
import Responsive from "@src/components/responsive";
import Tab from "@src/components/tab";
import Tag from "@src/components/tag";
import { colors } from "@src/constant";
import { useMobile } from "@src/hooks/use_responsive";
import { randomColor } from "@src/utils/random_color";
import { Avatar } from "antd";
import {
  ActivityLight,
  BasketLight,
  DesignLight,
  DirectionRight,
  FacebookLight,
  LogoInstagram,
  MultiselectLight,
  PhoneLight,
  ScheduleLight,
  ShoppingBagLight,
  TwitterLight,
  VideoRecorderLight,
} from "maple-icons";
import React from "react";
import PopularProductsTable from "./components/popular_products_table";
import ProductViewsBarChart from "./components/product_views_bar_chart";
import TabHeader from "./components/tab_header";
import TabPaneChart from "./components/tab_pane_chart";
import TabPaneCustomer from "./components/tab_pane_customer";
import "./index.scoped.scss";

export default function Home() {
  const isMobile = useMobile();
  const tips = [
    {
      icon: (
        <ScheduleLight color={colors["neutral-06"]} width={20} height={20} />
      ),
      text: "Early access",
      tag: {
        text: "New",
        color: colors["secondary-01"],
      },
      duration: "3 mins read",
    },
    {
      icon: (
        <DirectionRight color={colors["neutral-06"]} width={20} height={20} />
      ),
      text: "Asset use guidelines",
      tag: {
        text: "New",
        color: colors["secondary-04"],
      },
      duration: "2 mins read",
    },
    {
      icon: <DesignLight color={colors["neutral-06"]} width={20} height={20} />,
      text: "Exclusive downloads",
      duration: "2 mins read",
    },
    {
      icon: (
        <VideoRecorderLight
          color={colors["neutral-06"]}
          width={20}
          height={20}
        />
      ),
      text: "Behind the scenes",
      tag: {
        text: "New",
        color: colors["secondary-01"],
      },
      duration: "3 mins read",
    },
    {
      icon: <PhoneLight color={colors["neutral-06"]} width={20} height={20} />,
      text: "Asset use guidelines",
      tag: {
        text: "New",
        color: colors["secondary-04"],
      },
      duration: "5 mins read",
    },
    {
      icon: (
        <MultiselectLight color={colors["neutral-06"]} width={20} height={20} />
      ),
      text: "Life & work updates",

      duration: "3 mins read",
    },
  ];
  return (
    <ContentBox title="Dashboard" className="overflow-y-scroll">
      <div className="area-box grid">
        <div className="area-item grid">
          <div className="grid">
            <div className="item dashboard-card-block">
              <BlockHeader bgColor={colors["secondary-01"]} title="Overflow" />
              <div className="content-box">
                <Tab
                  tabs={[
                    {
                      header: (
                        <TabHeader
                          index={0}
                          desc="Customer"
                          number="1223"
                          isRise={false}
                          percent={35.8}
                          icon={
                            <Responsive
                              desktop={
                                <ShoppingBagLight
                                  width={20}
                                  height={20}
                                  color={colors["neutral-07"]}
                                />
                              }
                              mobile={
                                <ShoppingBagLight
                                  width={14}
                                  height={14}
                                  color={colors["neutral-07"]}
                                />
                              }
                            />
                          }
                          iconPlateBg={colors["secondary-03"]}
                        />
                      ),
                      pane: <TabPaneCustomer />,
                    },
                    {
                      header: (
                        <TabHeader
                          index={1}
                          desc="Viewer"
                          number="31K"
                          isRise
                          percent={12.8}
                          icon={
                            <Responsive
                              desktop={
                                <ActivityLight
                                  width={20}
                                  height={20}
                                  color={colors["neutral-07"]}
                                />
                              }
                              mobile={
                                <ActivityLight
                                  width={14}
                                  height={14}
                                  color={colors["neutral-07"]}
                                />
                              }
                            />
                          }
                          iconPlateBg={colors["secondary-02"]}
                        />
                      ),
                      pane: <TabPaneChart />,
                    },
                  ]}
                />
              </div>
            </div>
            <div className="item dashboard-card-block">
              <BlockHeader
                bgColor={colors["secondary-02"]}
                title="Product views"
              />
              <div
                className="content-box"
                style={{ height: isMobile ? "140px" : "180px" }}
              >
                <ProductViewsBarChart />
              </div>
            </div>
            <div className="item dashboard-card-block pro-tips-box">
              <BlockHeader bgColor={colors["secondary-04"]} title="Pro tips" />
              <div className="content-box">
                <p className="desc">Need some ideas for the next product?</p>
                <div className="grid tips">
                  {tips.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-start items-center"
                      >
                        <IconPlate className="icon" circle>
                          {item.icon}
                        </IconPlate>
                        <div>
                          <p className="subtitle">{item.text}</p>
                          <div className="flex justify-start items-center">
                            {item.tag && (
                              <Tag color={item.tag.color}>{item.tag.text}</Tag>
                            )}
                            {item.tag && <div className="tag-space" />}
                            <div className="duration-box flex justify-start items-center">
                              <Avatar
                                size={20}
                                style={{
                                  backgroundColor: randomColor(
                                    "secondary-0",
                                    5
                                  ),
                                }}
                                src={`https://joeschmoe.io/api/v1/random?t=${index}`}
                              />
                              <span className="text">{item.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="item dashboard-card-block link-box">
              <BlockHeader
                bgColor={colors["secondary-03"]}
                title="Get more customers!"
              />
              <div className="content-box">
                <p className="desc">
                  50% of new customers explore products because the author
                  sharing the work on the social media network. Gain your
                  earnings right now! 🔥
                </p>
                <div className="flex justify-between items-center">
                  <div className="method flex justify-center items-center ">
                    <FacebookLight width={24} height={24} />
                    <div className="w-14px" />
                    <span>Facebook</span>
                  </div>
                  <div className="method flex justify-center items-center">
                    <TwitterLight width={24} height={24} />
                    <div className="w-14px" />
                    <span>Twitter</span>
                  </div>
                  <div className="method flex justify-center items-center">
                    <LogoInstagram width={24} height={24} />
                    <div className="w-14px" />

                    <span>Instagram</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="area-item">
          <div className="grid">
            <div className="item dashboard-card-block">
              <BlockHeader
                bgColor={colors["secondary-03"]}
                title="Popular products"
              />
              <PopularProductsTable />
            </div>
            <div className="item dashboard-card-block">
              <BlockHeader bgColor={colors["secondary-05"]} title="Comments" />
              <Comments />
              <Button className="!w-full" plain>
                View all
              </Button>
            </div>
            <div className="item dashboard-card-block refund-requests-box">
              <BlockHeader
                bgColor={colors["secondary-01"]}
                title="Refund requests"
              />
              <div className="requests-box w-full flex justify-start items-start">
                <IconPlate
                  className="icon"
                  circle
                  style={{
                    backgroundColor: colors["secondary-01"],
                  }}
                >
                  <BasketLight
                    width={20}
                    height={19}
                    color={colors["primary-03"]}
                  />
                </IconPlate>
                <p className="content flex-1">
                  <span className="gray">You have</span> 52 open refund requests{" "}
                  <span className="gray">to action. This includes</span> 8 new
                  requests. 👀
                </p>
              </div>
              <Button className="!w-full" plain>
                Review refund requests
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContentBox>
  );
}
