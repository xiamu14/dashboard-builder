import TrendTips from "@src/components/trend_tips";
import { colors } from "@src/constant";
import { useMobile } from "@src/hooks/use_responsive";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "./data";
import "./index.scoped.scss";

const CustomersLineChart = React.memo(() => {
  const isMobile = useMobile();
  return (
    <div className="w-full" style={{ height: isMobile ? "160px" : "260px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={260}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" interval={2} />
          <YAxis />
          <Tooltip />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="income"
            stroke={colors["primary-01"]}
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});

const CustomerStatistic = React.memo(() => {
  return (
    <div className="customer-statistic">
      <h4 className="total-customer">1,509 customers</h4>
      <div className="trend-box flex items-center">
        <TrendTips percent={37.8} isRise={true} />
        <span className="monthly">vs. Sep 8,2021</span>
      </div>
      <CustomersLineChart />
    </div>
  );
});

export default CustomerStatistic;
