import CustomersOverview from "@src/pages/dashboard/views/customers_overview";
import { ProfileCircledLight } from "maple-icons";
import { createRoutes } from "../utils";

const power = "customers";

const routes = createRoutes<"overview">(power, {
  overview: {
    path: "/overview",
    component: CustomersOverview,
  },
});

const menus = {
  title: "Customers",
  icon: ProfileCircledLight,
  power,
  children: [
    {
      title: "overview",
      path: routes.overview.path,
    },
  ],
};

export default { routes: Object.values(routes), menus, metaRoutes: routes };
