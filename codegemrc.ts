import _generate from "@babel/generator";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import * as t from "@babel/types";
import { defineConfig } from "codegem";
import loadFile from "codegem-load-file";
import createReactSvg from "codegem-machine-react-svg";
import fs from "fs";
import { createRequire } from "module";
import path from "path";
import prettier from "prettier";

// @ts-ignore
const traverse = _traverse.default;
// @ts-ignore
const generate = _generate.default;

const require = createRequire(import.meta.url);

const config = {
  routePath: "./src/pages/dashboard/routes",
  fileType: "ts",
};

export default defineConfig({
  // output: , // 根目录;所有生成文件统一生成在这个目录下
  factory: [
    {
      use: [loadFile(`${config.routePath}/collection`)],
      machine: createRouter(),
    },
    {
      use: [loadFile("./src/style/color_variable.css")],
      machine: createColorVariable(),
    },
    {
      use: [loadFile(`./src/assets/flags`)],
      machine: createReactSvg({
        output: "./src/components/icon_flags",
      }),
    },
  ],
});

function createRouter() {
  return (source: any[]) => {
    // console.log("source", source);

    // 获取 routes
    let routes = source[0].files.map((filePath) => {
      return path.basename(filePath).replace(path.extname(filePath), "");
    });

    // NOTE: 根据 orders.json （外部可以调整菜单顺序）重新排序
    const ordersPath = path.resolve(config.routePath, "./orders.json");
    if (fs.existsSync(ordersPath)) {
      const orders = require(ordersPath);
      const currentOrders = orders.filter((it) => routes.includes(it));
      const addRoutes = routes.filter((it) => !currentOrders.includes(it));
      routes = [...currentOrders, ...addRoutes];
    }
    const ordersCode = `${JSON.stringify(routes)}`;

    const templateCode = `
      export const routes = []

      export const menus = []

      export const routeMap = {};
    `;

    const ast = parse(templateCode, { sourceType: "module" });

    try {
      traverse(ast, {
        Program(path) {
          const reversedRoutes = [...routes].reverse();
          reversedRoutes.forEach((name) => {
            path.node.body.unshift(
              t.importDeclaration(
                [t.importDefaultSpecifier(t.identifier(name))],
                t.stringLiteral(`./collection/${name}`)
              )
            );
          });
        },

        Identifier(path) {
          if (path.node.name === "routes") {
            if (t.isVariableDeclarator(path.container)) {
              // console.log(path.parent);
              routes.forEach((name) => {
                path.parent.init.elements.push(
                  t.spreadElement(
                    t.memberExpression(
                      t.identifier(`${name}`),
                      t.identifier("routes")
                    )
                  )
                );
              });
            }
          }

          if (path.node.name === "menus") {
            if (t.isVariableDeclarator(path.container)) {
              routes.forEach((name) => {
                path.parent.init.elements.push(
                  t.memberExpression(
                    t.identifier(`${name}`),
                    t.identifier("menus")
                  )
                );
              });
            }
          }

          if (path.node.name === "routeMap") {
            if (t.isVariableDeclarator(path.container)) {
              // console.log(path);
              routes.forEach((name) => {
                path.parent.init.properties.push(
                  t.objectProperty(
                    t.identifier(`${name}`),
                    t.memberExpression(
                      t.identifier(`${name}`),
                      t.identifier("metaRoutes")
                    )
                  )
                );
              });
            }
          }
        },
      });
    } catch (error) {
      console.log(error);
    }

    const result = generate(ast);

    const formateCode = prettier.format(result.code, {
      printWidth: 80,
      tabWidth: 2,
      trailingComma: "all",
      parser: "babel",
    });

    return [
      {
        pathname: path.resolve(config.routePath, `./index.${config.fileType}`),
        code: formateCode,
      },
      {
        pathname: path.resolve(config.routePath, "./orders.json"),
        code: ordersCode,
      },
    ];
  };
}

function createColorVariable() {
  return (source: any[]) => {
    // TODO: 正则解析出 css 里的变量
    const text = fs.readFileSync(source[0].files[0], "utf-8");
    const colors = getColorVariablesObj(text);
    const code = `export default ${JSON.stringify(colors, null, "\t")}`;
    return [
      {
        pathname: path.resolve("./src/constant/color_variables.ts"),
        code,
      },
    ];
  };
}

// 获取全部的 color variables
function getColorVariablesObj(text: string) {
  const colorsText = text.substring(
    text.indexOf("/*--start-color--*/") + 19,
    text.indexOf("/*--end-color--*/")
  );
  const colors = {};
  const colorsArray = colorsText.replace(/\n\s*/g, "").split(";");
  colorsArray.forEach((it) => {
    if (it) {
      const color = it.split(": ");
      colors[color[0].replace(/^--/, "")] = color[1];
    }
  });
  // console.log(colors);
  return colors;
}
