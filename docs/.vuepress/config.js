const fs = require("fs");

module.exports = {
  title: "aqua.css",
  description: "documentation for aqua.css",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/basic/button/" }
    ],
    sidebar: [
      {
        title: "通用",
        collapsable: false,
        children: ["basic/button", "basic/icon"]
      },
      {
        title: "表单",
        collapsable: false,
        children: [
          "form/checkbox",
          "form/form",
          "form/input",
          "form/radio",
          "form/range",
          "form/rate",
          "form/switch"
        ]
      },
      {
        title: "数据",
        collapsable: false,
        children: [
          "data/accordion",
          "data/badge",
          "data/gauge",
          "data/pagination",
          "data/progress",
          "data/tag",
          "data/timeline",
          "data/tooltip"
        ]
      },
      {
        title: "导航",
        collapsable: false,
        children: [
          "navigation/breadcrumb",
          "navigation/dropdown",
          "navigation/nav"
        ]
      },
      {
        title: "反馈",
        collapsable: false,
        children: ["notice/alert", "notice/dialog", "notice/loading"]
      }
    ],
    repo: "alphardex/aqua.css",
    repoLabel: "源码"
  }
};
