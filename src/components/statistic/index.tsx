import AspectDiv from "@src/components/aspect_div";
import TrendTips from "@src/components/trend_tips";
import { rgba } from "@src/utils/css";
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
  width: string;
  height: string;
  style?: Omit<React.CSSProperties, "width" | "height">;
}

const Statistic = React.memo(
  ({
    icon,
    bgColor,
    info,
    style,
    number,
    width,
    height,
    changeProps,
    lineChartProps,
  }: Props) => {
    return (
      <AspectDiv width={width} height={height}>
        <div
          className="flex statistic-box"
          style={{ backgroundColor: rgba(bgColor, 0.25), ...style }}
        >
          <div className="weekly-data">
            <div className="icon-box">{icon}</div>
            <p>{info}</p>
            <p className="number">{number}</p>
            <TrendTips {...changeProps} />
          </div>
          <div className="line-chart">
            <TinyLineChart {...lineChartProps} />
          </div>
        </div>
      </AspectDiv>
    );
  }
);

export default Statistic;
