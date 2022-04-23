import table from "./collection/table";
import product from "./collection/product";
export const routes = [...table.routes, ...product.routes];
export const menus = [table.menus, product.menus];
export const routeMap = {
  table: table.metaRoutes,
  product: product.metaRoutes,
};
