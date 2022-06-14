import Responsive from "@src/components/responsive";
import Statistic from "@src/components/statistic";
import { colors } from "@src/constant";
import { ActivityLight, PaymentLight, ShoppingBagLight } from "maple-icons";
import React, { useMemo } from "react";
import "./index.scoped.scss";

interface DataType {
  icon: JSX.Element;
  bgColor: string;
  lineChartProps: { stroke: string };
  info: string;
  number: string;
  trendTipsProps: {
    percent: number;
    isRise: boolean;
    desc?: string;
  };
}

const ProductStatistic = () => {
  const data: DataType[] = useMemo(() => {
    return [
      {
        icon: (
          <ActivityLight color={colors["neutral-01"]} width={20} height={20} />
        ),
        bgColor: colors["secondary-04"],
        lineChartProps: { stroke: colors["primary-02"] },
        info: "Earing",
        number: "128",
        trendTipsProps: {
          isRise: false,
          percent: 34.5,
          desc: "this week",
        },
      },
      {
        icon: (
          <PaymentLight color={colors["neutral-01"]} width={20} height={20} />
        ),
        bgColor: colors["secondary-03"],
        lineChartProps: { stroke: colors["primary-01"] },
        info: "Customer",
        number: "128",
        trendTipsProps: {
          isRise: false,
          percent: 34.5,
          desc: "this week",
        },
      },
      {
        icon: (
          <ShoppingBagLight
            color={colors["neutral-01"]}
            width={20}
            height={20}
          />
        ),
        bgColor: colors["secondary-02"],
        lineChartProps: { stroke: colors["primary-04"] },
        info: "Payouts",
        number: "128",
        trendTipsProps: {
          isRise: false,
          percent: 34.5,
          desc: "this week",
        },
      },
    ];
  }, []);

  const Mobile = useMemo(() => {
    return (
      <div className="statistic-box">
        <div className="statistic-wrapper">
          {data.map((item, index) => {
            return (
              <div key={index} className="mr-2">
                <Statistic width="285px" height="70%" {...item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }, [data]);
  const Desktop = useMemo(() => {
    return (
      <div className="w-full flex justify-between">
        {data.map((item, index) => {
          return <Statistic key={index} width="31%" height="70%" {...item} />;
        })}
      </div>
    );
  }, [data]);
  return <Responsive mobile={Mobile} desktop={Desktop} />;
};

export default ProductStatistic;
