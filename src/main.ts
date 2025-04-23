import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

// 引入 AirPower/Web 样式
import '@airpower/web/dist/web.css'
import { WebConfig } from '@airpower/web'

// 做一些初始化配置操作
WebConfig.disablePermission = true


createApp(App).use(ElementPlus).mount('#app')
