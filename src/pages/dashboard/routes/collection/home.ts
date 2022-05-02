import Home from "@src/pages/dashboard/components/home";
import { HomeLight } from "maple-icons";
import { createRoutes } from "../utils";

const power = "home";

const routes = createRoutes<"root">(power, {
  root: {
    path: "",
    component: Home,
  },
});

const menus = {
  title: "Home",
  icon: HomeLight,
  power,
  path: routes.root.path,
};

export default { routes: Object.values(routes), menus, metaRoutes: routes };
