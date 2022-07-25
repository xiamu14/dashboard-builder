import { colors } from "@src/constant";
import { useMobile } from "@src/hooks/use_responsive";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import data from "./data";

const CountryStatistic = React.memo(() => {
  const isMobile = useMobile();
  return (
    <div className="w-full" style={{ height: isMobile ? "160px" : "260px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <YAxis type="category" dataKey="name" />
          <XAxis type="number" />
          <Bar dataKey="uv" fill={colors["secondary-04"]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});

export default CountryStatistic;
