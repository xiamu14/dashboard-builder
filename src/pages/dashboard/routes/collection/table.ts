import Table from "@src/pages/dashboard/components/table_base";
import HomeLight from "maple-icons/dist/home_light";
import { createRoutes } from "../utils";

const power = "table";

const routes = createRoutes<"home">(power, {
  home: {
    path: "/home",
    component: Table,
  },
});

const menus = {
  title: "home",
  icon: HomeLight,
  power,
  path: routes.home.path,
};

export default { routes: Object.values(routes), menus, metaRoutes: routes };
