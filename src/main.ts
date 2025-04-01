import { createApp } from 'vue'
import App from './App.vue'
import {  UserService } from './model/UserService'
import { UserEntity } from './model/UserEntity'
import { WebConfig } from '@airpower/web'

createApp(App).mount('#app')


async function init() {
  const user = new UserEntity()
  user.email = 'admin@hamm.cn'
  user.password = 'Aa123456'
  const access = await UserService.create().login(user)
  WebConfig.setAccessToken(access)
}

init()