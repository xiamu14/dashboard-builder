import { colors } from "@src/constant";
import { ArrowDownLight, ArrowUpLight } from "maple-icons";
import React, { CSSProperties, memo } from "react";
import "./index.scoped.scss";
const TrendTips = memo(
  ({
    percent,
    isRise,
    desc,
    className,
    style,
  }: {
    percent: number;
    isRise: boolean;
    desc?: string;
    className?: string;
    style?: CSSProperties;
  }) => {
    return (
      <div
        className={`trend-tips-inner-box ${className ?? ""}`}
        style={{
          backgroundColor: isRise
            ? colors["secondary-07"]
            : colors["secondary-01"],
          ...(style ?? {}),
        }}
      >
        {isRise ? (
          <ArrowUpLight color={colors["primary-02"]} />
        ) : (
          <ArrowDownLight color={colors["primary-03"]} />
        )}
        <span
          className="percent"
          style={{
            color: isRise ? colors["primary-02"] : colors["primary-03"],
          }}
        >
          {percent}
        </span>
        {desc && <span>{desc}</span>}
      </div>
    );
  }
);

export default TrendTips;
