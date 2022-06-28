export const themeData = {
  "logo": "https://vuepress.vuejs.org/hero.png",
  "navbar": [
    {
      "text": "组件",
      "link": "/components/pages/"
    },
    {
      "text": "文档",
      "children": [
        {
          "text": "介绍",
          "link": "/document/introduction/"
        },
        {
          "text": "注意事项",
          "link": "/document/tips/"
        }
      ]
    },
    {
      "text": "工具箱",
      "children": [
        {
          "text": "在线编辑",
          "children": [
            {
              "text": "图片压缩",
              "link": "https://tinypng.com/"
            }
          ]
        }
      ]
    }
  ],
  "sidebarDepth": 2,
  "sidebar": {
    "/components/": [
      {
        "text": "button",
        "collapsable": true,
        "children": [
          {
            "text": "Button 按钮",
            "link": "/components/pages/Button"
          }
        ]
      },
      {
        "text": "背景",
        "collapsable": true,
        "children": [
          {
            "text": "Block 背景块",
            "link": "/components/pages/Block"
          }
        ]
      },
      {
        "text": "轮播图",
        "collapsable": true,
        "children": [
          {
            "text": "RotationChart",
            "link": "/components/pages/RotationChart"
          }
        ]
      },
      {
        "text": "loading",
        "collapsable": true,
        "children": [
          {
            "text": "loading",
            "link": "/components/pages/loading"
          }
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
