import BlockHeader from "@src/components/block_header";
import ContentBox from "@src/components/content_box";
import {
  FlagsDe,
  FlagsGb,
  FlagsIt,
  FlagsNl,
  FlagsUs,
} from "@src/components/icon_flags";
import IconPlate from "@src/components/icon_plate";
import Statistic from "@src/components/statistic";
import { colors } from "@src/constant";
import { useMobile } from "@src/hooks/use_responsive";
import ProductViewsBarChart from "@src/pages/dashboard/views/home/components/product_views_bar_chart";
import ProductSalesTable from "./components/product_sales_table";

import { pxToRem } from "@src/utils/css";
import { ActivityLight, PieChartLight, ShoppingBagLight } from "maple-icons";
import React from "react";
import "./index.scoped.scss";
export default function IncomeEarning() {
  const isMobile = useMobile();
  return (
    <ContentBox title="Earning" className="overflow-y-scroll">
      <div className="earning-box grid">
        <div className="dashboard-card-block item1">
          <div className="statistic-box">
            <Statistic
              icon={
                <ActivityLight
                  color={colors["neutral-07"]}
                  width={20}
                  height={20}
                />
              }
              iconBgColor={colors["secondary-04"]}
              width={isMobile ? "100%" : "31%"}
              height="60%"
              bgColor={colors["neutral-01"]}
              info="Earing"
              number="$128"
              trendTipsProps={{
                isRise: false,
                percent: 34.5,
                desc: "this week",
              }}
              className={isMobile ? "border-bottom" : "border-right"}
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
              width={isMobile ? "100%" : "31%"}
              height="60%"
              info="Customer"
              number="$128"
              trendTipsProps={{
                isRise: true,
                percent: 34.5,
                desc: "this week",
              }}
              className={isMobile ? "border-bottom" : "border-right"}
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
              width={isMobile ? "100%" : "31%"}
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
        <div className="dashboard-card-block item2">
          <BlockHeader bgColor={colors["secondary-02"]} title="Product sales" />
          <div className="w-full" style={{ height: pxToRem(240) }}>
            <ProductViewsBarChart />
          </div>
        </div>
        <div className="dashboard-card-block item3">
          <BlockHeader
            bgColor={colors["secondary-03"]}
            title="Product countries"
          />
          <div className="country-list">
            {[
              {
                country: "United States",
                icon: <FlagsUs width={20} height={16} />,
                income: "$876.77",
              },
              {
                country: "Germany",
                icon: <FlagsDe width={20} height={16} />,
                income: "$128.77",
              },
              {
                country: "Netherlands",
                icon: <FlagsNl width={20} height={16} />,
                income: "$128.77",
              },
              {
                country: "United Kingdom",
                icon: <FlagsGb width={20} height={16} />,
                income: "$128.77",
              },
              {
                country: "Italy",
                icon: <FlagsIt width={20} height={16} />,
                income: "$128.77",
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="item flex justify-between items-center"
                >
                  <IconPlate circle className="icon">
                    {item.icon}
                  </IconPlate>
                  <div>{item.country}</div>
                  <div className="flex-1" />
                  <div>{item.income}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="dashboard-card-block item4">
          <ProductSalesTable />
        </div>
      </div>
    </ContentBox>
  );
}
