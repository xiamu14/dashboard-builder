import home from "./collection/home";
import products from "./collection/products";
import shop from "./collection/shop";
export const routes = [...home.routes, ...products.routes, ...shop.routes];
export const menus = [home.menus, products.menus, shop.menus];
export const routeMap = {
  home: home.metaRoutes,
  products: products.metaRoutes,
  shop: shop.metaRoutes,
};
