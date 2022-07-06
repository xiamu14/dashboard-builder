import AspectDiv from "@src/components/aspect_div";
import TrendTips from "@src/components/trend_tips";
import { colors } from "@src/constant";
import { rgba } from "@src/utils/css";
import { AlertCircledFilled } from "maple-icons";
import React from "react";
import "./index.scoped.scss";

interface Props {
  bgColor: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  info: string;
  number: string;
  trendTipsProps: {
    percent: number;
    isRise: boolean;
    desc?: string;
  };
  lineChartProps?: {
    stroke: string;
  };
  width: string;
  height: string;
  className?: string;
  style?: Omit<React.CSSProperties, "width" | "height">;
}

const EarningStatistic = React.memo(
  ({
    icon,
    bgColor,
    info,
    style,
    number,
    width,
    height,
    iconBgColor,
    className,
    trendTipsProps,
    lineChartProps,
  }: Props) => {
    return (
      <AspectDiv width={width} height={height}>
        <div
          className={`flex statistic-inner-box ${className ?? ""}`}
          style={{ backgroundColor: rgba(bgColor, 0.25), ...style }}
        >
          <div className="weekly-data">
            <div
              className="icon-box"
              style={{ backgroundColor: iconBgColor ?? colors["neutral-07"] }}
            >
              {icon}
            </div>
            <div>
              <div className="flex justify-start items-center">
                <p className="info">{info}</p>
                <AlertCircledFilled width={13} height={13} />
              </div>
              <p className="number">{number}</p>
              <TrendTips
                {...trendTipsProps}
                style={{ backgroundColor: colors["neutral-01"] }}
              />
            </div>
          </div>
        </div>
      </AspectDiv>
    );
  }
);

export default EarningStatistic;
