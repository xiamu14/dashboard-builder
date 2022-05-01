import ProductsDashboard from "@src/pages/dashboard/components/products_dashboard";
import { DiamondLight } from "maple-icons";
import { createRoutes } from "../utils";

const power = "products";

const routes = createRoutes<"dashboard">(power, {
  dashboard: {
    path: "/dashboard",
    component: ProductsDashboard,
  },
});

const menus = {
  title: "products",
  icon: DiamondLight,
  power,
  children: [
    {
      title: "dashboard",
      path: routes.dashboard.path,
    },
  ],
};

export default { routes: Object.values(routes), menus, metaRoutes: routes };