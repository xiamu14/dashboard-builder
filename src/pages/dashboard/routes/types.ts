import React from "react";

export type TargetType = "_self" | "_blank" | "_top" | "_parent";

export interface MenuItemType {
  title: string;
  path?: string;
  target?: TargetType;
}

export interface RouteType {
  path: string;
  power?: string;
  menu?: MenuItemType;
  component: React.FC;
}

// export interface Routes<T extends string> {
//   [k: T]: RouteType;
// }

export type Routes<T extends string> = Record<T, RouteType>;

export interface MenuType {
  title: string;
  power: string;
  icon?: React.FC;
  path?: string;
  target?: TargetType;
  children?: MenuItemType[];
  group?: {
    title: string;
    children: MenuItemType[];
  }[];
}
