import { colors } from "@src/constant";
import { rgba } from "@src/utils/css";
import ArrowDownLight from "maple-icons/dist/arrow_down_light";
import React from "react";
import "./index.scoped.scss";
import TinyLineChart from "./tiny_line_chart";

interface Props {
  bgColor: string;
  icon: React.ReactNode;
  info: string;
  number: string;
  changeProps: {
    percent: number;
    upOrDown: 1 | -1;
  };
  lineChartProps: {
    stroke: string;
  };
}

const Statistic = React.memo(
  ({ icon, bgColor, info, number, changeProps, lineChartProps }: Props) => {
    return (
      <div
        className="flex statistic-box"
        style={{ backgroundColor: rgba(bgColor, 0.25) }}
      >
        <div className="weekly-data">
          <div className="icon-box">{icon}</div>
          <p>{info}</p>
          <p className="number">{number}</p>
          <div className="change-box">
            <ArrowDownLight color={colors["primary-02"]} />
            <span className="percent" style={{ color: colors["primary-02"] }}>
              {changeProps.percent}
            </span>
            <span>this week</span>
          </div>
        </div>
        <div className="line-chart">
          <TinyLineChart {...lineChartProps} />
        </div>
      </div>
    );
  }
);

export default Statistic;
