import Shop from "@src/pages/dashboard/components/shop";
import { StoreLight } from "maple-icons";
import { createRoutes } from "../utils";

const power = "shop";

const routes = createRoutes<"root">(power, {
  root: {
    path: "",
    component: Shop,
  },
});

const menus = {
  title: "Shop",
  icon: StoreLight,
  power,
  path: routes.root.path,
};

export default { routes: Object.values(routes), menus, metaRoutes: routes };
