import home from "./collection/home";
import products from "./collection/products";
import customers from "./collection/customers";
import shop from "./collection/shop";
import income from "./collection/income";
export const routes = [
  ...home.routes,
  ...products.routes,
  ...customers.routes,
  ...shop.routes,
  ...income.routes,
];
export const menus = [
  home.menus,
  products.menus,
  customers.menus,
  shop.menus,
  income.menus,
];
export const routeMap = {
  home: home.metaRoutes,
  products: products.metaRoutes,
  customers: customers.metaRoutes,
  shop: shop.metaRoutes,
  income: income.metaRoutes,
};
