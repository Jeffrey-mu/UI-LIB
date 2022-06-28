import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("loading-01", defineAsyncComponent(() => import("/Users/wjf/Desktop/learn/UI-LIB/docs/.vuepress/components/loading/01.vue"))),
      app.component("block-01", defineAsyncComponent(() => import("/Users/wjf/Desktop/learn/UI-LIB/docs/.vuepress/components/block/01.vue"))),
      app.component("button-01", defineAsyncComponent(() => import("/Users/wjf/Desktop/learn/UI-LIB/docs/.vuepress/components/button/01.vue")))
  },
}
