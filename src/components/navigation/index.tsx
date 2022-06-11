import { menus } from "@src/pages/dashboard/routes";
import { MenuItemType, MenuType } from "@src/pages/dashboard/routes/types";
import { menuSiderAtom } from "@src/recoil/menu_mobile";
import { Menu } from "antd";
import React, { useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import "./index.scoped.scss";
const { SubMenu, ItemGroup: MenuItemGroup } = Menu;

const Navigation = React.memo(() => {
  const [openKeys, setOpenKeys] = React.useState<React.Key[]>([""]);
  const location = useLocation();
  const pathnameRef = useRef(location.pathname);

  const setIsOpen = useSetRecoilState(menuSiderAtom);

  const toggleOpen = useCallback(() => {
    setIsOpen((it) => !it);
  }, [setIsOpen]);

  useEffect(() => {
    const pathArr = pathnameRef.current.split("/");
    if (pathArr[pathArr.length - 2] && pathArr[pathArr.length - 2] !== "-") {
      setOpenKeys([pathArr[pathArr.length - 2]]);
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
                  <span className="menu-icon flex justify-center">
                    <menu.icon width={20} height={20} />
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
                          onClick={toggleOpen}
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
                    onClick={toggleOpen}
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
            <Link
              to={menu.path}
              target={menu?.target || "_self"}
              onClick={toggleOpen}
            >
              <span
                className="flex items-center"
                style={{ fontWeight: 600, fontSize: "14px" }}
              >
                {menu.icon && (
                  <span className="menu-icon flex justify-center">
                    <menu.icon width={20} height={20} />
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
    <div className="menu-box overflow-y-scroll overflow-x-hidden">
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
    </div>
  );
});

export default Navigation;
