import home from "./collection/home";
import products from "./collection/products";
export const routes = [...home.routes, ...products.routes];
export const menus = [home.menus, products.menus];
export const routeMap = {
  home: home.metaRoutes,
  products: products.metaRoutes,
};
