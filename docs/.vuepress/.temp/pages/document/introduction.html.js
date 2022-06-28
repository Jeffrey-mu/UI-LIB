export const data = {
  "key": "v-6ee1ea78",
  "path": "/document/introduction.html",
  "title": "introduction",
  "lang": "zh-CN",
  "frontmatter": {},
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
  "filePathRelative": "document/introduction.md"
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
