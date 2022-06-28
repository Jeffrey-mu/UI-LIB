export const data = {
  "key": "v-1020f180",
  "path": "/components/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "actionText": "快速上手 →",
    "features": [
      {
        "title": "简洁至上",
        "details": "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"
      },
      {
        "title": "Vue驱动",
        "details": "享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。"
      },
      {
        "title": "高性能",
        "details": "VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。"
      }
    ],
    "footer": "MIT Licensed | Copyright (c) 2022 Jeffrey"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1654166674000,
    "contributors": [
      {
        "name": "mr-wang1009",
        "email": "1115378579@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
