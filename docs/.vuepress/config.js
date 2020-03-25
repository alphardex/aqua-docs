const fs = require("fs");

module.exports = {
  title: "aqua.css",
  description: "documentation for aqua.css",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/guide/installation/" }
    ],
    sidebar: [
      {
        title: "指南",
        collapsable: false,
        children: ["guide/installation", "guide/customization"]
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          "components/button",
          "components/input",
          "components/radio",
          "components/checkbox",
          "components/switch",
          "components/progress",
          "components/range",
          "components/tooltip",
          "components/dialog",
          "components/pagination",
          "components/nav",
          "components/dropdown",
          "components/timeline",
          "components/accordion",
          "components/rate",
          "components/loading",
          "components/gauge"
        ]
      }
    ]
  }
};
