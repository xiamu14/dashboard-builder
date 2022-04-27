import React from "react";
import "./index.scoped.scss";
import TinyLineChart from "./tiny_line_chart";

const Statistic = React.memo(() => {
  return (
    <div className="flex statistic-box">
      <div />
      <div className="line-chart">
        <TinyLineChart />
      </div>
    </div>
  );
});

export default Statistic;
