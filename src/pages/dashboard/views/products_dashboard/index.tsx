import BlockHeader from "@src/components/block_header";
import ContentBox from "@src/components/content_box";
import { colors } from "@src/constant";
import { pxToRem } from "@src/utils/css";
import React from "react";
import ProductsTable from "./components/products_table";
import ProductActivityTable from "./components/product_activity_table";
import ProductStatistic from "./components/product_statistic";
import ProductViewsBarChart from "./components/product_views_bar_chart";
import "./index.scoped.scss";

export default function ProductsDashboard() {
  return (
    <ContentBox title="Products dashboard" className=" overflow-y-scroll">
      <div className="grid">
        <div className="grid-item-1 dashboard-card-block">
          <BlockHeader bgColor={colors["secondary-02"]} title="Overview" />
          <ProductStatistic />
        </div>
        <div className="grid-item-2 dashboard-card-block">
          <BlockHeader
            bgColor={colors["secondary-04"]}
            title="Product activity"
          />
          <ProductActivityTable />
        </div>
        <div className="grid-item-3 dashboard-card-block">
          <BlockHeader bgColor={colors["secondary-03"]} title="Product views" />
          <div className="w-full" style={{ height: pxToRem(180) }}>
            <ProductViewsBarChart />
          </div>
        </div>
        <div className="grid-item-4 dashboard-card-block">
          <BlockHeader bgColor={colors["secondary-02"]} title="Products" />
          <div className="flex-1">
            <ProductsTable />
          </div>
        </div>
      </div>
    </ContentBox>
  );
}
