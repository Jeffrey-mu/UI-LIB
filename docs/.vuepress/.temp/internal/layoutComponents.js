import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/wjf/Desktop/learn/UI-LIB/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/wjf/Desktop/learn/UI-LIB/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
