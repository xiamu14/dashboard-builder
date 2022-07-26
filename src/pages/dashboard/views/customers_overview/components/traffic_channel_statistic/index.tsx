import { colors } from "@src/constant";
import { useMobile } from "@src/hooks/use_responsive";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "./data";
const TrafficChannelStatistic = React.memo(() => {
  const isMobile = useMobile();
  return (
    <div className="w-full" style={{ height: isMobile ? "220px" : "260px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Direct" stackId="a" fill={colors["primary-01"]} />
          <Bar dataKey="Search" stackId="a" fill={colors["secondary-01"]} />
          <Bar dataKey="Market" stackId="a" fill={colors["secondary-03"]} />
          <Bar
            dataKey="Social media"
            stackId="a"
            fill={colors["secondary-02"]}
          />
          <Bar dataKey="Other" stackId="a" fill={colors["secondary-05"]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});

export default TrafficChannelStatistic;
