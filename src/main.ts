import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

// 引入 AirPower/Web 样式
import '@airpower/web/dist/web.css'
import { DateTimeUtil, WebConfig } from '@airpower/web'

// 做一些初始化配置操作
WebConfig.disablePermission = true
WebConfig.timeout = 10 * DateTimeUtil.MILLISECONDS_PER_SECOND


createApp(App).use(ElementPlus).mount('#app')
