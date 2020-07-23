const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const VueTemplate = require("./template/compTemplate").fullVueComp;
const apiTempate = require("./template/apiTemplate").apiTemplate;
const mockTemplate = require("./template/mockTemplate").mockTemplate;
const routeTemplate = require("./template/routeTemplate").routeTemplate;
const vuexTemplate = require("./template/vuexTemplate").vuexTemplate;

/**
 * 模板Map
 */
const templateMap = {
  1: VueTemplate,
  2: mockTemplate,
  3: apiTempate,
  4: routeTemplate,
  5: vuexTemplate,
};
/**
 * 生成文件
 * @param {String} url 文件路径
 * @param {String} data 文件内数据
 */
function generateFile(url, data) {
  //	去除自动生成路径前面的"/"
  const filePath = url.slice(1, url.length);
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}

/**
 * 生成模板文件
 * @param {string} url 生成地址
 * @param {number} type 类型 1-vue文档|2-mock服务|3-api文档|4-路由文档|5-vuex文档|
 *
 */
function generateTemplate(url, type) {
  const fileName = path.parse(url).name;
  generateFile(url, templateMap[type](fileName));
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let createComp = vscode.commands.registerCommand("quick-vue-template.createComp", function (url) {
    generateTemplate(url.path, 1);
  });

  let createMock = vscode.commands.registerCommand("quick-vue-template.createMock", function (url) {
    generateTemplate(url.path, 2);
  });

  let createApi = vscode.commands.registerCommand("quick-vue-template.createApi", function (url) {
    generateTemplate(url.path, 3);
  });

  let createRouter = vscode.commands.registerCommand("quick-vue-template.createRouter", function (url) {
    generateTemplate(url.path, 4);
  });

  let createVuex = vscode.commands.registerCommand("quick-vue-template.createVuex", function (url) {
    generateTemplate(url.path, 5);
  });

  context.subscriptions.push(createComp, createMock, createApi, createRouter, createVuex);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
