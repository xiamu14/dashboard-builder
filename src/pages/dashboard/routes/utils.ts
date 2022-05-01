import { Routes } from "./types";

export function createRoutes<K extends string>(
  power: string,
  routes: Routes<K>
): Routes<keyof typeof routes> {
  Object.keys(routes).forEach((key) => {
    const route = routes[key as K];
    route.path = `/-/${power}${route.path}`;
    route.power = power;
    if (route.menu) {
      route.menu = {
        ...route.menu,
        path: route.path,
      };
    }
  });
  return routes;
}
