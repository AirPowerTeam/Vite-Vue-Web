import App from "./App.vue";
import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { UserEntity } from "./model/UserEntity";
import { UserService } from "./model/UserService";
import { WebAccessToken } from "@airpower/web";

const app = createApp(App);

app.use(ElementPlus);
async function init() {
  if (!WebAccessToken.getAccessToken()) {
    const user = new UserEntity()
    user.email = 'admin@hamm.cn'
    user.password = "Aa123456"
    const accessToken = await UserService.create().login(user)
    WebAccessToken.setAccessToken(accessToken)
  }
  app.mount("#app");
}
init();
