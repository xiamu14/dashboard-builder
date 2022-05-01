import BlockHeader from "@src/components/block_header";
import ContentBox from "@src/components/content_box";
import Tab from "@src/components/tab";
import { colors } from "@src/constant";
import { FacebookLight, LogoInstagram, TwitterLight } from "maple-icons";
import React from "react";
import ProductViewsBarChart from "./components/product_views_bar_chart";
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
                        header: "test1",
                        pane: "test1",
                      },
                      {
                        header: "test2",
                        pane: "test2",
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
