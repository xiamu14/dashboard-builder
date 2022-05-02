import BlockHeader from "@src/components/block_header";
import ContentBox from "@src/components/content_box";
import IconPlate from "@src/components/icon_plate";
import Statistic from "@src/components/statistic";
import { colors } from "@src/constant";
import ProductViewsBarChart from "@src/pages/dashboard/components/home/components/product_views_bar_chart";
import ProductActivityTable from "@src/pages/dashboard/components/products_dashboard/components/product_activity_table";
import { ActivityLight, PieChartLight, ShoppingBagLight } from "maple-icons";
import React from "react";
import "./index.scoped.scss";
export default function IncomeEarning() {
  return (
    <ContentBox title="Earning" className="overflow-y-scroll">
      <div className="earning-box grid">
        <div className="atom-desktop-block item1">
          <div className="statistic-box flex justify-between">
            <Statistic
              icon={
                <ActivityLight
                  color={colors["neutral-07"]}
                  width={20}
                  height={20}
                />
              }
              iconBgColor={colors["secondary-04"]}
              width="31%"
              height="60%"
              bgColor={colors["neutral-01"]}
              info="Earing"
              number="$128"
              trendTipsProps={{
                isRise: false,
                percent: 34.5,
                desc: "this week",
              }}
              className="border-right"
            />
            <Statistic
              icon={
                <PieChartLight
                  color={colors["neutral-07"]}
                  width={20}
                  height={20}
                />
              }
              iconBgColor={colors["secondary-02"]}
              bgColor={colors["neutral-01"]}
              width="31%"
              height="60%"
              info="Customer"
              number="$128"
              trendTipsProps={{
                isRise: true,
                percent: 34.5,
                desc: "this week",
              }}
              className="border-right"
            />
            <Statistic
              icon={
                <ShoppingBagLight
                  color={colors["neutral-07"]}
                  width={20}
                  height={20}
                />
              }
              iconBgColor={colors["secondary-03"]}
              bgColor={colors["neutral-01"]}
              width="31%"
              height="60%"
              info="Payouts"
              number="$128"
              trendTipsProps={{
                isRise: true,
                percent: 34.5,
                desc: "this week",
              }}
            />
          </div>
        </div>
        <div className="atom-desktop-block item2">
          <BlockHeader bgColor={colors["secondary-02"]} title="Product sales" />
          <div className="w-full h-270px">
            <ProductViewsBarChart />
          </div>
        </div>
        <div className="atom-desktop-block item3">
          <BlockHeader
            bgColor={colors["secondary-03"]}
            title="Product countries"
          />
          <div className="country-list">
            {[
              { country: "United States", income: "$876.77" },
              { country: "Germany", income: "$128.77" },
              { country: "Netherlands", income: "$128.77" },
              { country: "United Kingdom", income: "$128.77" },
              { country: "Italy", income: "$128.77" },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="item flex justify-between items-center"
                >
                  <IconPlate circle className="icon">
                    {/* <img /> */}
                  </IconPlate>
                  <div>{item.country}</div>
                  <div className="flex-1" />
                  <div>{item.income}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="atom-desktop-block item4">
          <ProductActivityTable />
        </div>
      </div>
    </ContentBox>
  );
}
