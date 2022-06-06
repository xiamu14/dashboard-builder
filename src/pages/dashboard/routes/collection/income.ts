import IncomeEarning from "@src/pages/dashboard/views/income_earning";
import { PieChartLight } from "maple-icons";
import { createRoutes } from "../utils";

const power = "earning";

const routes = createRoutes<"earning">(power, {
  earning: {
    path: "/earning",
    component: IncomeEarning,
  },
});

const menus = {
  title: "Income",
  icon: PieChartLight,
  power,
  children: [
    {
      title: "Earning",
      path: routes.earning.path,
    },
  ],
};

export default { routes: Object.values(routes), menus, metaRoutes: routes };
