import BlockHeader from "@src/components/block_header";
import ContentBox from "@src/components/content_box";
import IconPlate from "@src/components/icon_plate";
import Tab from "@src/components/tab";
import Tag from "@src/components/tag";
import { colors } from "@src/constant";
import {
  ActivityLight,
  FacebookLight,
  LogoInstagram,
  ScheduleLight,
  ShoppingBagLight,
  TwitterLight,
} from "maple-icons";
import React from "react";
import ProductViewsBarChart from "./components/product_views_bar_chart";
import TabHeader from "./components/tab_header";
import { TabPane } from "./components/tab_pane";
import "./index.scoped.scss";

export default function Home() {
  return (
    <ContentBox title="Dashboard">
      <div className="h-full max-h-full overflow-y-scroll">
        <div className="area-box grid">
          <div className="area-item grid">
            <div className="grid">
              <div className="item atom-desktop-block">
                <BlockHeader
                  bgColor={colors["secondary-01"]}
                  title="Overflow"
                />
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
                              <ShoppingBagLight
                                width={20}
                                height={20}
                                color={colors["neutral-07"]}
                              />
                            }
                            iconPlateBg={colors["secondary-03"]}
                          />
                        ),
                        pane: <TabPane />,
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
                              <ActivityLight
                                width={20}
                                height={20}
                                color={colors["neutral-07"]}
                              />
                            }
                            iconPlateBg={colors["secondary-02"]}
                          />
                        ),
                        pane: <TabPane />,
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="item atom-desktop-block">
                <BlockHeader
                  bgColor={colors["secondary-02"]}
                  title="Product views"
                />
                <div className="content-box h-180px">
                  <ProductViewsBarChart />
                </div>
              </div>
              <div className="item atom-desktop-block">
                <BlockHeader
                  bgColor={colors["secondary-04"]}
                  title="Pro tips"
                />
                <div className="content-box">
                  <p>Need some ideas for the next product?</p>
                  <div className="grid">
                    <div className="flex justify-start items-center">
                      <IconPlate>
                        <ScheduleLight />
                      </IconPlate>
                      <div>
                        <p>Early access</p>
                        <div>
                          <Tag>New</Tag>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item atom-desktop-block link-box">
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
              <div className="item atom-desktop-block">
                <BlockHeader
                  bgColor={colors["secondary-03"]}
                  title="Popular products"
                />
              </div>
              <div className="item atom-desktop-block">
                <BlockHeader
                  bgColor={colors["secondary-05"]}
                  title="Comments"
                />
              </div>
              <div className="item atom-desktop-block">
                <BlockHeader
                  bgColor={colors["secondary-01"]}
                  title="Refund requests"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentBox>
  );
}
