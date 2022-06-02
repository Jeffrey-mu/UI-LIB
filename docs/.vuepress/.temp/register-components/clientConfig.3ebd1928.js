import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Button", defineAsyncComponent(() => import("/Users/wjf/Desktop/learn/UI-LIB/docs/.vuepress/components/Button.vue"))),
      app.component("InputNumber", defineAsyncComponent(() => import("/Users/wjf/Desktop/learn/UI-LIB/docs/.vuepress/components/InputNumber.vue"))),
      app.component("slider", defineAsyncComponent(() => import("/Users/wjf/Desktop/learn/UI-LIB/docs/.vuepress/components/slider.vue")))
  },
}
