import { colors } from "@src/constant";
import { ArrowDownLight, ArrowUpLight } from "maple-icons";
import React, { memo } from "react";

const TrendTips = memo((changeProps: { percent: number; upOrDown: 1 | -1 }) => {
  return (
    <div className="change-box">
      {changeProps.upOrDown > 0 ? (
        <ArrowUpLight color={colors["primary-02"]} />
      ) : (
        <ArrowDownLight color={colors["primary-02"]} />
      )}
      <span className="percent" style={{ color: colors["primary-02"] }}>
        {changeProps.percent}
      </span>
      <span>this week</span>
    </div>
  );
});

export default TrendTips;
