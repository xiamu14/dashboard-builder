import { colors } from "@src/constant";
import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "23",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "24",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "25",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "26",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "27",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "28",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "29",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ProductSalesBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis dataKey="pv" />
        <Tooltip />
        <Bar dataKey="pv" fill={colors["secondary-04"]}>
          {data.map((item, index) => (
            <Cell
              cursor="pointer"
              fill={
                item.pv > 5000 ? colors["primary-01"] : colors["secondary-04"]
              }
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProductSalesBarChart;
