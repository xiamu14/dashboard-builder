import _generate from "@babel/generator";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import * as t from "@babel/types";
import { transform } from "@svgr/core";
import { defineConfig } from "codegem";
import loadFile, { FileInfoType } from "codegem-load-file";
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
    // {
    //   use: [loadFile(`./src/assets/ui_icons`)],
    //   machine: createSvgComp("./src/components/ui_icons"),
    // },
    {
      use: [loadFile("./src/style/color_variable.css")],
      machine: createColorVariable(),
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

function createSvgComp(output: string) {
  return (source: any[]) => {
    console.log(source[0].filesInfo[0]);

    //   {path: '/Users/ben/Documents/workspace/project/antd-hero/preview/src/assets/ui_icons/activity/filled.svg',
    // root: '/',
    // dir: '/Users/ben/Documents/workspace/project/antd-hero/preview/src/assets/ui_icons/activity',
    // base: 'filled.svg',
    // ext: '.svg',
    // name: 'filled'}

    const result = source[0].filesInfo
      .filter((it: FileInfoType) => {
        return it.ext === ".svg";
      })
      .map((fileInfo: FileInfoType) => {
        const svgName = fileInfo.dir.split(path.sep).slice(-1);
        const svgStyle = fileInfo.name;

        // 获取文件名 activity_filled.tsx
        const generatedFileName = `${svgName}_${svgStyle}`;
        // 导出的默认组件名 ActivityFilled
        const exportComponentName = toHump(generatedFileName);

        const svgCode = fs.readFileSync(fileInfo.path, "utf-8");
        try {
          const jsCode = transform.sync(
            svgCode,
            {
              plugins: [
                "@svgr/plugin-svgo",
                "@svgr/plugin-jsx",
                "@svgr/plugin-prettier",
              ],
              icon: true,
              typescript: true,
              replaceAttrValues: { "#6F767E": '{props.color || "#6F767E"}' },
            },
            { componentName: exportComponentName }
          );

          return {
            pathname: path.resolve(output, `${generatedFileName}.tsx`),
            code: jsCode,
          };
        } catch (error) {
          console.error(error);
        }

        return [];
      });
    return result;
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

// 下划线转驼峰
function toHump(name) {
  return name
    .split("_")
    .map((it) => {
      return it.replace(/^\w/g, (it) => {
        return it.toUpperCase();
      });
    })
    .join("");
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
