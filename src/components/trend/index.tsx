import Tag from "@src/components/tag";
import { TrendType } from "@src/components/trend/types";
import TrendTips from "@src/components/trend_tips";
import React from "react";

const Trend = (trendData: TrendType) => {
  return (
    <div className="flex justify-start items-center">
      <Tag className="mr-4px">{trendData.current}</Tag>
      {trendData.isRise !== undefined && (
        <TrendTips
          percent={trendData.percent as number}
          isRise={trendData.isRise}
          style={{ backgroundColor: "transparent" }}
        />
      )}
    </div>
  );
};

export default Trend;
