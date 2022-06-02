const { defaultTheme } = require('@vuepress/theme-default')
const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
const {
    path
} = require('@vuepress/utils')
const demoblockPlugin = require('vuepress-plugin-demoblock-plus')
const {registerComponentsPlugin} = require('@vuepress/plugin-register-components')
module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'UI-LIB',
    description: '组件库',
    theme: defaultTheme({
        navbar,
        sidebarDepth: 2, // 侧边栏显示2级
        sidebar
    }),
    plugins: [
        demoblockPlugin(''),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        })
    ]
}