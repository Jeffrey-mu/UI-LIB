import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


import { defineClientConfig } from '@vuepress/client'
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.use(Antd)
    },
  })