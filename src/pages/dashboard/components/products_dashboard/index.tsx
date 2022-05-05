import BlockHeader from "@src/components/block_header";
import ContentBox from "@src/components/content_box";
import Statistic from "@src/components/statistic";
import { colors } from "@src/constant";
import { ActivityLight, PaymentLight, ShoppingBagLight } from "maple-icons";
import React from "react";
import ProductsTable from "./components/products_table";
import ProductActivityTable from "./components/product_activity_table";
import ProductViewsBarChart from "./components/product_views_bar_chart";
import "./index.scoped.scss";

export default function ProductsDashboard() {
  return (
    <ContentBox title="Products dashboard" className=" overflow-y-scroll">
      <div className="grid">
        <div className="grid-item-1 atom-desktop-block">
          <BlockHeader bgColor={colors["secondary-02"]} title="Overview" />
          <div className="statistic-box flex justify-between">
            <Statistic
              icon={
                <ActivityLight
                  color={colors["neutral-01"]}
                  width={20}
                  height={20}
                />
              }
              width="31%"
              height="70%"
              bgColor={colors["secondary-04"]}
              lineChartProps={{ stroke: colors["primary-02"] }}
              info="Earing"
              number="128"
              trendTipsProps={{
                isRise: false,
                percent: 34.5,
                desc: "this week",
              }}
            />
            <Statistic
              icon={
                <PaymentLight
                  color={colors["neutral-01"]}
                  width={20}
                  height={20}
                />
              }
              bgColor={colors["secondary-03"]}
              width="31%"
              height="70%"
              lineChartProps={{ stroke: colors["primary-01"] }}
              info="Customer"
              number="128"
              trendTipsProps={{
                isRise: true,
                percent: 34.5,
                desc: "this week",
              }}
            />
            <Statistic
              icon={
                <ShoppingBagLight
                  color={colors["neutral-01"]}
                  width={20}
                  height={20}
                />
              }
              bgColor={colors["secondary-02"]}
              width="31%"
              height="70%"
              lineChartProps={{ stroke: colors["primary-04"] }}
              info="Payouts"
              number="128"
              trendTipsProps={{
                isRise: true,
                percent: 34.5,
                desc: "this week",
              }}
            />
          </div>
        </div>
        <div className="grid-item-2 atom-desktop-block">
          <BlockHeader
            bgColor={colors["secondary-04"]}
            title="Product activity"
          />
          <ProductActivityTable />
        </div>
        <div className="grid-item-3 atom-desktop-block">
          <BlockHeader bgColor={colors["secondary-03"]} title="Product views" />
          <div className="w-full h-180px">
            <ProductViewsBarChart />
          </div>
        </div>
        <div className="grid-item-4 atom-desktop-block">
          <BlockHeader bgColor={colors["secondary-02"]} title="Products" />
          <div className="flex-1">
            <ProductsTable />
          </div>
        </div>
      </div>
    </ContentBox>
  );
}
