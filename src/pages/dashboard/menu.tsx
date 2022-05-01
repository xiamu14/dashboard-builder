import { menus } from "@src/pages/dashboard/routes";
import { MenuItemType, MenuType } from "@src/pages/dashboard/routes/types";
import { Menu } from "antd";
import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
const { SubMenu, ItemGroup: MenuItemGroup } = Menu;

const MenuPro = React.memo(() => {
  const [openKeys, setOpenKeys] = React.useState<React.Key[]>([""]);
  const location = useLocation();
  const pathnameRef = useRef(location.pathname);

  useEffect(() => {
    const pathArr = pathnameRef.current.split("/");
    if (pathArr[pathArr.length - 2] && pathArr[pathArr.length - 2] !== "-") {
      setOpenKeys([pathArr[pathArr.length - 2]]);
    } else {
      setOpenKeys(["novel"]);
    }
  }, []);

  const handleOpenChange = (newOpenKeys: React.Key[]) => {
    setOpenKeys(newOpenKeys);
  };

  const getComponents = (menu: MenuType) => {
    try {
      if (menu.children || menu.group) {
        return (
          <SubMenu
            key={menu.power}
            title={
              <span
                className="flex items-center"
                style={{ fontWeight: 600, fontSize: "14px" }}
              >
                {menu.icon && (
                  <span className="mr-[12px]">
                    <menu.icon />
                  </span>
                )}
                <span>{menu.title}</span>
              </span>
            }
          >
            {menu?.group?.map((group: any) => {
              return (
                <MenuItemGroup key={group.title} title={group.title}>
                  {group.children.map((item: MenuItemType) => {
                    return (
                      <Menu.Item key={item.path}>
                        <Link
                          target={item?.target || "_self"}
                          to={item.path as string}
                        >
                          {item.title}
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </MenuItemGroup>
              );
            })}
            {menu?.children?.map((item: MenuItemType) => {
              return (
                <Menu.Item key={item.path}>
                  <Link
                    target={item?.target || "_self"}
                    to={item.path as string}
                  >
                    {item.title}
                  </Link>
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      }
      if (menu.path) {
        return (
          <Menu.Item key={menu.path}>
            <Link to={menu.path} target={menu?.target || "_self"}>
              <span
                className="flex items-center"
                style={{ fontWeight: 600, fontSize: "14px" }}
              >
                {menu.icon && (
                  <span className="mr-[12px]">
                    <menu.icon />
                  </span>
                )}
                <span>{menu.title}</span>
              </span>
            </Link>
          </Menu.Item>
        );
      }
    } catch (error) {
      throw new Error("菜单配置错误，请检查配置代码");
    }
  };

  return (
    <Menu
      // @ts-ignore
      mode="inline"
      selectedKeys={[location.pathname]}
      onOpenChange={handleOpenChange}
      openKeys={openKeys as string[]}
      style={{ width: "100%" }}
    >
      {menus.map((menu) => {
        // NOTE: 判断是否菜单组，还是菜单
        return getComponents(menu as MenuType);
      })}
    </Menu>
  );
});

export default MenuPro;
