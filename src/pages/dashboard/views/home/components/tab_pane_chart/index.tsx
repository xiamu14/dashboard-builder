import { colors } from "@src/constant";
import { useMobile } from "@src/hooks/use_responsive";
import React, { memo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Apr",
    income: 3000,
  },
  {
    name: "May",
    income: 3200,
  },
  {
    name: "Jun",
    income: 2000,
  },
  {
    name: "July",
    income: 2780,
  },
  {
    name: "Aug",
    income: 890,
  },
  {
    name: "Sep",
    income: 2390,
  },
];

const TabPaneChart = memo(() => {
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
          <XAxis dataKey="name" />
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

export default TabPaneChart;
