import DiamondLight from "@src/components/ui_icons/diamond_light";
import Table from "@src/pages/dashboard/components/table_base";
import { createRoutes } from "../utils";

const power = "products";

const routes = createRoutes<"dashboard">(power, {
  dashboard: {
    path: "/dashboard",
    component: Table,
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
