const fs = require("fs");

module.exports = {
  title: "aqua.css",
  description: "documentation for aqua.css",
  themeConfig: {
    nav: [{
        text: "首页",
        link: "/"
      },
      {
        text: "指南",
        link: "/guide/installation"
      },
      {
        text: "组件",
        link: "/components/basic/button"
      },
      {
        text: "例子",
        link: "/examples/basic"
      },
      {
        text: '生态',
        items: [{
          text: '项目',
          items: [{
            text: 'aqua.vue',
            link: 'https://aquavue.netlify.com'
          }]
        }]
      },
      {
        text: "观念",
        link: "/idea/original"
      },
      {
        text: '捐赠',
        link: '/donate/donate'
      }
    ],
    sidebar: {
      "/guide/": [{
        title: "指南",
        collapsable: false,
        children: ["installation", "customization"]
      }],
      "/components/": [{
          title: "通用",
          collapsable: false,
          children: ["basic/button", "basic/icon"]
        },
        {
          title: "表单",
          collapsable: false,
          children: [
            "form/checkbox",
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
            "data/carousel",
            "data/gauge",
            "data/pagination",
            "data/progress",
            "data/table",
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
            "navigation/nav",
            "navigation/step"
          ]
        },
        {
          title: "反馈",
          collapsable: false,
          children: ["notice/alert", "notice/dialog", "notice/loading"]
        },
        {
          title: '其他',
          collapsable: false,
          children: ['others/backtop', 'others/divider']
        }
      ],
      "/examples/": [{
        title: "例子",
        collapsable: false,
        children: ["basic.md", "form.md", "data.md"]
      }],
      "/idea/": [{
        title: "观念",
        collapsable: false,
        children: ["original"]
      }],
      '/donate/': [{
        title: '捐赠',
        collapsable: false,
        children: ['donate']
      }]
    },
    repo: "alphardex/aqua.css",
    repoLabel: "源码"
  }
};