import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-36b1a79b","/document/",{"title":""},["/document/index.html","/document/README.md"]],
  ["v-6ee1ea78","/document/introduction.html",{"title":"introduction"},["/document/introduction","/document/introduction.md"]],
  ["v-47bfe766","/document/tips.html",{"title":"tips"},["/document/tips","/document/tips.md"]],
  ["v-1020f180","/components/",{"title":""},["/components/index.html","/components/README.md"]],
  ["v-499a963d","/components/sidebar.html",{"title":""},["/components/sidebar","/components/sidebar.md"]],
  ["v-b959d088","/components/pages/Button.html",{"title":""},["/components/pages/Button","/components/pages/Button.md"]],
  ["v-5d612751","/components/pages/InputNumber.html",{"title":"Input 输入"},["/components/pages/InputNumber","/components/pages/InputNumber.md"]],
  ["v-7023202b","/components/pages/",{"title":""},["/components/pages/index.html","/components/pages/README.md"]],
  ["v-08bf7b6d","/components/pages/Slider.html",{"title":""},["/components/pages/Slider","/components/pages/Slider.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
